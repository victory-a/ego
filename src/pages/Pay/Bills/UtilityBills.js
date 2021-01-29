import React from "react";
import { queryCache, useMutation } from "react-query";
import { Formik, Form } from "formik";
import isEmpty from "lodash.isempty";

import useCustomToast from "hooks/useCustomToast";
import { payBill } from "lib/transaction";
import { utilityBillSchema } from "utils/validationSchema";
import { validateAmountInput } from "utils/validateAmount";

import StyledButton from "components/CustomButton";
import TextInput from "components/FormElements/TextInput";
import AmountInput from "components/FormElements/AmountInput";

import { InlineFields } from "layout/AppLayout/styles";
import { SubscriberArray, ButtonWrapper } from "../styles";

import EKEDC from "assets/ekedc.png";
import IBEDC from "assets/ibedc.png";
import IKEDC from "assets/ikedc.png";

const discos = [
  { icon: EKEDC, value: "EKEDC" },
  { icon: IBEDC, value: "IBEDC" },
  { icon: IKEDC, value: "IKEDC" }
];

const UtilityBills = () => {
  const { doToast } = useCustomToast();
  const [mutate] = useMutation(payBill);

  async function handleSubmit({ amount, customerID, disco }, setSubmitting) {
    const payload = {
      amount,
      category: "debit",
      recipient: {
        customerID: customerID,
        disco: disco
      }
    };

    await mutate(payload, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("getTransactions");
        await queryCache.invalidateQueries("getBalance");
        doToast("Leggo!", "Transaction Completed Successfully");
      },

      onError: error => {
        doToast("Failed", error, "error");
      }
    });
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ disco: "", amount: "", customerID: "" }}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      validationSchema={utilityBillSchema}
    >
      {({ isSubmitting, setFieldValue, values, errors }) => (
        <>
          <p className={`provider ${errors.disco ? "error" : ""}`}>Select Provider</p>
          <SubscriberArray>
            {discos.map(({ icon, value }, i) => (
              <button
                className={`subscriber ${values.disco === value ? "active" : ""}`}
                onClick={() => {
                  setFieldValue("disco", value);
                }}
                key={`disco-${i}`}
                aria-label={`${value} disco`}
              >
                <img src={icon} alt={`disco-${value}`} className="subscriber" />
              </button>
            ))}
          </SubscriberArray>
          <Form>
            <InlineFields>
              <AmountInput
                placeholder="Amount"
                name="amount"
                onChange={e => setFieldValue("amount", validateAmountInput(e))}
              />
              <TextInput placeholder="4 digit Customer ID" name="customerID" type="number" />
            </InlineFields>
            <ButtonWrapper>
              <StyledButton
                type="submit"
                isLoading={false}
                disabled={isSubmitting || !isEmpty(errors)}
              >
                Pay Bill
              </StyledButton>
            </ButtonWrapper>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default UtilityBills;

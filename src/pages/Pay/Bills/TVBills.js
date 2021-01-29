import React from "react";
import { queryCache, useMutation } from "react-query";
import { Formik, Form } from "formik";
import isEmpty from "lodash.isempty";

import { payBill } from "lib/transaction";
import { getPlans } from "lib/queries/data";
import { tvBillSchema } from "utils/validationSchema";

import StyledButton from "components/CustomButton";
import SelectInput from "components/FormElements/SelectInput";
import TextInput from "components/FormElements/TextInput";
import AmountInput from "components/FormElements/AmountInput";
import useCustomToast from "hooks/useCustomToast";

import { InlineFields } from "layout/AppLayout/styles";
import { SubscriberArray, ButtonWrapper } from "../styles";

import { validateAmountInput } from "utils/validateAmount";
import { koboToNaira } from "utils/amountFormatters";

import DSTV from "assets/dstv.png";
import Kwese from "assets/kwese.png";
import GOTV from "assets/gotv.png";

const subscribers = [
  { icon: DSTV, value: "DSTV" },
  { icon: Kwese, value: "KWESE" },
  { icon: GOTV, value: "GOTV" }
];

const TVBills = () => {
  const { doToast } = useCustomToast();
  const [subscriber, setSubscriber] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const [mutate] = useMutation(payBill);

  React.useEffect(() => {
    subscriber !== "" && fetchPlans();

    async function fetchPlans() {
      const plans = await getPlans(subscriber);

      if (plans?.length > 0) {
        setOptions(plans);
      }
    }
  }, [subscriber]);

  function handleSuscriberSelect(value) {
    setSubscriber(value);
  }

  function prefillAmount(value, changeFn) {
    if (value) {
      const selectedOption = options.filter(({ paymentCode }) => paymentCode === value);
      changeFn("amount", koboToNaira(selectedOption[0]?.amount));
    } else {
      changeFn("amount", "");
    }
  }

  async function handleSubmit({ amount, customerID, subscriber }, setSubmitting) {
    const payload = {
      amount,
      category: "debit",
      recipient: {
        customerID: customerID,
        subscriber: subscriber
      }
    };
    await mutate(payload, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("getTransactions");
        await queryCache.invalidateQueries("getBalance");
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
      initialValues={{ subscriber: "", amount: "", customerID: "" }}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      validationSchema={tvBillSchema}
    >
      {({ isSubmitting, setFieldValue, values, errors }) => (
        <>
          <p className={`provider ${errors.subscriber ? "error" : ""}`}>Select Provider</p>
          <SubscriberArray>
            {subscribers.map(({ icon, value }, i) => (
              <button
                className={`subscriber ${values.subscriber === value ? "active" : ""}`}
                onClick={() => {
                  setFieldValue("subscriber", value);
                  handleSuscriberSelect(value);
                }}
                key={`subscriber-${i}`}
                aria-label={`${value} tv subscriber`}
              >
                <img src={icon} alt={`subscriber-${value}`} className="subscriber" />
              </button>
            ))}
          </SubscriberArray>

          <Form>
            <InlineFields>
              <SelectInput
                placeholder="Select plan"
                name="paymentCode"
                options={options}
                onChange={({ target: { value }, nativeEvent: { target: nativeTarget } }) => {
                  setFieldValue("paymentCode", value);

                  const index = nativeTarget.selectedIndex;
                  const text = nativeTarget[index].text;
                  setFieldValue("plan", text);

                  prefillAmount(value, setFieldValue);
                }}
              />
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

export default TVBills;

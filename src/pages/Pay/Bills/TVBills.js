import React from "react";
import { Formik, Form } from "formik";

import { tvBillSchema } from "utils/validationSchema";
import StyledButton from "components/CustomButton";
import SelectInput from "components/FormElements/SelectInput";
import TextInput from "components/FormElements/TextInput";

import { InlineFields } from "layout/AppLayout/styles";
import { SubscriberArray, ButtonWrapper } from "../styles";

import DSTV from "assets/dstv.png";
import Kwese from "assets/kwese.png";
import GOTV from "assets/gotv.png";

import kwesePlans from "data/kwese.json";
import dstvPlans from "data/dstv.json";
import gotvPlans from "data/gotv.json";
import AmountInput from "components/FormElements/AmountInput";
import { validateAmountInput } from "utils/validateAmount";
import { koboToNaira } from "utils/amountFormatters";

const subscribers = [
  { icon: DSTV, value: "dstv" },
  { icon: Kwese, value: "kwese" },
  { icon: GOTV, value: "gotv" }
];

const TVBills = () => {
  const [options, setOptions] = React.useState([]);

  function handleSuscriberSelect(value) {
    switch (value) {
      case "dstv":
        setOptions(dstvPlans);
        break;
      case "gotv":
        setOptions(gotvPlans);
        break;

      case "kwese":
        setOptions(kwesePlans);
        break;

      default:
        setOptions([]);

        break;
    }
  }

  function prefillAmount(value, changeFn) {
    if (value) {
      const selectedOption = options.filter(({ paymentCode }) => paymentCode === value);
      changeFn("amount", koboToNaira(selectedOption[0]?.amount));
    } else {
      changeFn("amount", "");
    }
  }

  function handleSubmit(values, setSubmitting) {
    // console.log(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ subscriber: "", amount: "", customerID: "" }}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      validationSchema={tvBillSchema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <>
          <p className="provider">Select Provider</p>
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
                // value={values.amount}
                onChange={e => setFieldValue("amount", validateAmountInput(e))}
              />
              <TextInput placeholder="4 digit Customer ID" name="customerID" type="number" />
            </InlineFields>
            <ButtonWrapper>
              <StyledButton type="submit" isLoading={false} disabled={Boolean(isSubmitting)}>
                Pay TV Bill
              </StyledButton>
            </ButtonWrapper>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default TVBills;

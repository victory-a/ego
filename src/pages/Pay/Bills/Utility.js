import React from "react";
import { Formik, Form } from "formik";

import { utilityBillSchema } from "utils/validationSchema";
import StyledButton from "components/CustomButton";
import TextInput from "components/FormElements/TextInput";

import { InlineFields } from "layout/AppLayout/styles";
import { SubscriberArray, ButtonWrapper } from "../styles";

import EKEDC from "assets/ekedc.png";
import IBEDC from "assets/ibedc.png";
import IKEDC from "assets/ikedc.png";

const discos = [
  { icon: EKEDC, value: "ekedc" },
  { icon: IBEDC, value: "ibedc" },
  { icon: IKEDC, value: "ikedc" }
];
const Utility = () => {
  function handleSubmit(values, setSubmitting) {
    // console.log(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ disco: "", amount: "", customerID: "" }}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      validationSchema={utilityBillSchema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <>
          <p className="provider">Select Provider</p>
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
              <TextInput placeholder="Amount" type="number" name="amount" />
              <TextInput placeholder="4 digit Customer ID" name="customerID" type="number" />
            </InlineFields>
            <ButtonWrapper>
              <StyledButton type="submit" isLoading={false} disabled={Boolean(isSubmitting)}>
                Pay Utility Bill
              </StyledButton>
            </ButtonWrapper>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Utility;

import React from "react";
import { Formik, Form } from "formik";
import { GiSmartphone } from "react-icons/gi";
import { FormErrorMessage } from "@chakra-ui/core";

import TextInput from "components/FormElements/TextInput";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";

// import AmountInput from "components/FormElements/AmountInput";

import { InlineFields } from "layout/AppLayout/styles";
import { TabWrapper, SubscriberArray, ButtonWrapper } from "./styles";

import { normalizeMobile } from "utils/formatNumber";
import { buyAirtimeSchema } from "utils/validationSchema";

import Mtn from "assets/mtn.svg";
import NineMobile from "assets/9mobile.svg";
import Glo from "assets/glo.svg";
import Airtel from "assets/airtel.svg";
import Male from "assets/male-fb.svg";

const subscribers = [
  { icon: Mtn, value: "mtn" },
  { icon: Glo, value: "glo" },
  { icon: Airtel, value: "airtel" },
  { icon: NineMobile, value: "9mobile" }
];

const selfObject = {
  icon: Male,
  value: "user"
};

const user = {
  mobile: "08012345678",
  subscriber: "mtn"
};

const Airtime = () => {
  const handleSubmit = (values, setSubmitting) => {
    values.mobile = normalizeMobile(values.mobile);
    setSubmitting(false);
  };

  return (
    <TabWrapper>
      <p>
        <span>
          <GiSmartphone fontSize={15} />
        </span>
        Airtime
      </p>

      <p>Select Provider</p>

      <Formik
        initialValues={{ amount: "", mobile: "", subscriber: "" }}
        validationSchema={buyAirtimeSchema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <>
            <SubscriberArray>
              <button
                className={"self subscriber"}
                onClick={() => {
                  setFieldValue("subscriber", user?.subscriber);
                  setFieldValue("mobile", user.mobile);
                }}
                arialabel={`${selfObject.value} airtime subscriber`}
              >
                <img src={selfObject.icon} alt="male icon" />
              </button>

              {subscribers.map(({ icon, value }, i) => (
                <button
                  className={`subscriber ${values.subscriber === value ? "active" : ""}`}
                  onClick={() => {
                    setFieldValue("subscriber", value);
                  }}
                  key={`subscriber-${i}`}
                  arialabel={`${value} airtime subscriber`}
                >
                  <img src={icon} alt={`subscriber-${value}`} className="subscriber" />
                </button>
              ))}
            </SubscriberArray>

            <Form>
              <InlineFields>
                <TextInput placeholder="Amount" type="number" name="amount" />
                {/* <AmountInput placeholder="Amount" type="number" name="amount" /> */}
                <PhoneNumberInput name="mobile" placeholder="Phone number" />
              </InlineFields>
              <ButtonWrapper>
                <StyledButton type="submit" isLoading={false} disabled={Boolean(isSubmitting)}>
                  Buy Airtime
                </StyledButton>
              </ButtonWrapper>
            </Form>
          </>
        )}
      </Formik>
    </TabWrapper>
  );
};

export default Airtime;

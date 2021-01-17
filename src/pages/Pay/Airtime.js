import React from "react";
import { Formik, Form } from "formik";
import isEmpty from "lodash.isempty";
import { GiSmartphone } from "react-icons/gi";

import AmountInput from "components/FormElements/AmountInput";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";
import useCustomToast from "hooks/useCustomToast";

import { InlineFields } from "layout/AppLayout/styles";
import { TabWrapper, SubscriberArray, ButtonWrapper } from "./styles";

import { normalizeMobile } from "utils/formatNumber";
import { buyAirtimeSchema } from "utils/validationSchema";
import { validateAmountInput } from "utils/validateAmount";

import Mtn from "assets/mtn.svg";
import NineMobile from "assets/9mobile.svg";
import Glo from "assets/glo.svg";
import Airtel from "assets/airtel.svg";
import Male from "assets/male-fb.svg";

const subscribers = [
  { icon: Mtn, value: "MTN" },
  { icon: Glo, value: "GLO" },
  { icon: Airtel, value: "AIRTEL" },
  { icon: NineMobile, value: "9MOBILE" }
];

const selfObject = {
  icon: Male,
  value: "user"
};

const user = {
  mobile: "08012345678"
};

const Airtime = () => {
  const { doToast } = useCustomToast();

  const handleSubmit = (values, setSubmitting) => {
    values.mobile = normalizeMobile(values.mobile);
    // console.log(values);
    doToast("Leggo!", "Transaction Completed Successfully");
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

      <Formik
        initialValues={{ amount: "", mobile: "", subscriber: "" }}
        validationSchema={buyAirtimeSchema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ isSubmitting, setFieldValue, values, errors }) => (
          <>
            <p className={`provider ${errors.subscriber ? "error" : ""}`}>Select Provider</p>

            <SubscriberArray>
              <button
                className={"self subscriber"}
                onClick={() => {
                  setFieldValue("subscriber", user?.subscriber);
                  setFieldValue("mobile", user.mobile);
                }}
                aria-label={`${selfObject.value} airtime subscriber`}
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
                  aria-label={`${value} airtime subscriber`}
                >
                  <img src={icon} alt={`subscriber-${value}`} className="subscriber" />
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
                <PhoneNumberInput name="mobile" placeholder="Phone number" />
              </InlineFields>
              <ButtonWrapper>
                <StyledButton
                  type="submit"
                  isLoading={false}
                  disabled={isSubmitting || !isEmpty(errors)}
                >
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

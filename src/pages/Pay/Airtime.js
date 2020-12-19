import React from "react";
import { Formik, Form } from "formik";
import { GiSmartphone } from "react-icons/gi";

import TextInput from "components/FormElements/TextInput";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";

import { TabWrapper, VendorArray, ButtonWrapper } from "./styles";
import { InlineFields } from "layout/AppLayout/styles";

import Mtn from "assets/mtn.svg";
import NineMobile from "assets/9mobile.svg";
import Glo from "assets/glo.svg";
import Airtel from "assets/airtel.svg";
import Male from "assets/male-fb.svg";
import { buyAirtimeSchema } from "utils/validationSchema";
import { normalizeMobile } from "utils/reformatMobile";

const vendors = [
  { icon: Mtn, value: "mtn" },
  { icon: Glo, value: "glo" },
  { icon: Airtel, value: "airtel" },
  { icon: NineMobile, value: "NineMobile" }
];

const selfObject = {
  icon: Male,
  value: "user"
};

const user = {
  mobile: "08012345678"
};

const Airtime = () => {
  const [selected, setSelected] = React.useState("");

  function handleTelcoSelect(value, formikFn) {
    if (value === "user") {
      formikFn("mobile", user?.mobile);
    } else {
      formikFn("mobile", "");
    }
    setSelected(value);
  }

  const handleSubmit = (values, setSubmitting) => {
    values.mobile = normalizeMobile(values.mobile);
    setSubmitting(false);
    // console.log(values);
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
        initialValues={{ amount: "", mobile: "" }}
        validationSchema={buyAirtimeSchema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <VendorArray>
              <button
                className={`self vendor ${selected === selfObject.value ? "active" : ""}`}
                onClick={() => handleTelcoSelect(selfObject.value, setFieldValue)}
                arialabel={`${selfObject.value} airtime vendor`}
              >
                <img src={selfObject.icon} alt="male icon" />
              </button>
              {vendors.map(({ icon, value }, i) => (
                <button
                  className={`vendor ${selected === value ? "active" : ""}`}
                  onClick={() => handleTelcoSelect(value, setFieldValue)}
                  key={`vendor-${i}`}
                  arialabel={`${value} airtime vendor`}
                >
                  <img src={icon} alt="mtn" className="vendor" />
                </button>
              ))}
            </VendorArray>
            <Form>
              <InlineFields>
                <TextInput placeholder="Amount" type="number" name="amount" />
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

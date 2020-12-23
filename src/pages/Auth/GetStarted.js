import React, { Fragment } from "react";
import { Box } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { getStartedValidation } from "utils/validationSchema";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";
import useCustomToast from "hooks/useCustomToast";

import { FormContainer, TitleWrapper, DescriptionWrapper } from "layout/AuthLayout/styles";
import { normalizeMobile } from "utils/formatNumber";

const GetStarted = () => {
  const { push } = useHistory();
  const { doToast } = useCustomToast();
  const handleSubmit = ({ mobile }) => {
    push({ pathname: "/verify", state: { mobile: normalizeMobile(mobile) } });
    doToast("OTP Sent", "Kindly check your messages for an OTP");
  };

  return (
    <Fragment>
      <FormContainer>
        <TitleWrapper>
          Transact <br />
          <span>with minimum fuss</span>
        </TitleWrapper>

        <DescriptionWrapper>
          Get started sending, receiving, spending and paying bills with just your phone number.
        </DescriptionWrapper>

        <Formik
          initialValues={{ mobile: "" }}
          onSubmit={handleSubmit}
          validationSchema={getStartedValidation}
        >
          {() => (
            <Form>
              <Box my="8rem">
                <PhoneNumberInput
                  name="mobile"
                  label="Phone number"
                  placeholder="Enter Phone Number"
                />
                <Box my="2rem" as="p">
                  Ensure you have access to this number.
                </Box>
              </Box>
              <StyledButton width="full" type="submit">
                Get Started
              </StyledButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Fragment>
  );
};

export default GetStarted;

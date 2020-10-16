import React, { Fragment } from "react";
import { Box, Input } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { phoneNumberFormat } from "utils/reformatMobile";
import { otpValidation } from "utils/validationSchema";
import StyledButton from "components/CustomButton";

import { FormContainer, TitleWrapper, ConfirmationWrapper } from "styles/appLayout";
import TextInput from "components/FormElements/TextInput";

const Verify = () => {
  const { push } = useHistory();
  const { state: { mobile } = {} } = useLocation();

  const handleSubmit = () => {};

  // React.useLayoutEffect(() => {
  //   if (!mobile) push("/");
  //   console.log(mobile);
  // });

  return (
    <Fragment>
      <FormContainer>
        <Box mb="3rem">
          <TitleWrapper>Account Validation</TitleWrapper>
        </Box>
        <ConfirmationWrapper>
          Enter the 6-digit confirmation code sent to <br /> +{phoneNumberFormat(mobile)} via SMS.
        </ConfirmationWrapper>

        <Formik
          initialValues={{ mobile: "" }}
          onSubmit={handleSubmit}
          validationSchema={otpValidation}
        >
          {() => (
            <Form>
              <Box my="8rem">
                <TextInput label="OTP" placeholder="Enter OTP" maxLength={6} name="passcode" />
              </Box>
              <StyledButton width="full" isLoading={false} type="submit">
                Continue
              </StyledButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Fragment>
  );
};

export default Verify;

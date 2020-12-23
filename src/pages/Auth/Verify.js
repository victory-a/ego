import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Icon, Text } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import { phoneCountryCodeFormat } from "utils/formatNumber";
import { otpValidation } from "utils/validationSchema";
import StyledButton from "components/CustomButton";

import { FormContainer, TitleWrapper, ConfirmationWrapper } from "layout/AuthLayout/styles";
import TextInput from "components/FormElements/TextInput";
import CountdownTimer from "components/CountDown";
import useCustomToast from "hooks/useCustomToast";

const Verify = () => {
  const { push } = useHistory();
  const { state: { mobile } = {} } = useLocation();
  const { login } = useAuth();
  const { doToast } = useCustomToast();

  const handleSubmit = () => {
    login();
    doToast("Login Success", "You have successfully logged in");
  };

  React.useLayoutEffect(() => {
    if (!mobile) push("/");
  });

  return (
    <Fragment>
      <Box mb="15px" color="ego.primary">
        <Link as={RouterLink} to={"/"}>
          <Icon name="arrow-back" size="18px" />
          <Text display="inline-block" fontWeight="bold" mt="5px" ml="3px">
            Back
          </Text>
        </Link>
      </Box>

      <FormContainer>
        <Box mb="3rem">
          <TitleWrapper>Account Validation</TitleWrapper>
        </Box>

        {mobile ? (
          <ConfirmationWrapper>
            Enter the 6-digit confirmation code sent to <br /> +{phoneCountryCodeFormat(mobile)} via
            SMS.
          </ConfirmationWrapper>
        ) : null}

        <Formik
          initialValues={{ passcode: "" }}
          onSubmit={handleSubmit}
          validationSchema={otpValidation}
        >
          {() => (
            <Form>
              <Box my="8rem">
                <TextInput label="OTP" placeholder="Enter OTP" maxLength={6} name="passcode" />
                <Box as="p" textAlign="center">
                  enter <strong>123456</strong> (Sandbox key{" "}
                  <span role="img" aria-label="wink">
                    😉
                  </span>
                  )
                </Box>
              </Box>

              <CountdownTimer />

              <StyledButton width="full" type="submit">
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

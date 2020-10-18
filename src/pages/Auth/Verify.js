import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Icon, Text } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { phoneNumberFormat } from "utils/reformatMobile";
import { otpValidation } from "utils/validationSchema";
import StyledButton from "components/CustomButton";

import {
  FormContainer,
  TitleWrapper,
  ConfirmationWrapper,
  CountdownWrapper
} from "layout/AuthLayout/styles";
import TextInput from "components/FormElements/TextInput";

const Verify = () => {
  const { push } = useHistory();
  const [timer, setTimer] = React.useState(false);

  const { state: { mobile } = {} } = useLocation();

  const time = "00:60";
  const handleSubmit = () => {};

  React.useLayoutEffect(() => {
    if (!mobile) push("/");
    // console.log(mobile);
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
            Enter the 6-digit confirmation code sent to <br /> +{phoneNumberFormat(mobile)} via SMS.
          </ConfirmationWrapper>
        ) : null}

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

              {timer ? (
                <CountdownWrapper>
                  Didn’t get code?{" "}
                  <span>
                    <Link>Click Here</Link>
                  </span>
                </CountdownWrapper>
              ) : (
                <CountdownWrapper>
                  Resend code in <span className="timer">{`(${time})`}</span>
                </CountdownWrapper>
              )}

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

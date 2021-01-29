import React, { Fragment } from "react";
import { queryCache, useMutation } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Icon, Text } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { login } from "lib/auth";
import { phoneCountryCodeFormat } from "utils/formatNumber";
import { otpValidation } from "utils/validationSchema";
import StyledButton from "components/CustomButton";
import { ShowError } from "components/ShowError/ShowError";

import { FormContainer, TitleWrapper, ConfirmationWrapper } from "layout/AuthLayout/styles";
import TextInput from "components/FormElements/TextInput";
import useCustomToast from "hooks/useCustomToast";

const Verify = () => {
  const { push } = useHistory();
  const { state: { mobile } = {} } = useLocation();
  const { doToast } = useCustomToast();

  React.useLayoutEffect(() => {
    if (!mobile) push("/");
  });

  const [mutate, { status, error }] = useMutation(login);

  async function handleSubmit({ pin }) {
    await mutate(
      { pin, mobile },
      {
        onSuccess: async () => {
          await queryCache.invalidateQueries("user");
          doToast("Leggo!", "Login Successful");
        }
      }
    );
  }

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
          <TitleWrapper>Welcome Back</TitleWrapper>
        </Box>

        {mobile ? (
          <ConfirmationWrapper>
            Enter the 6 digit pin for <br /> +{phoneCountryCodeFormat(mobile)}
          </ConfirmationWrapper>
        ) : null}

        <Formik
          initialValues={{ pin: "" }}
          onSubmit={handleSubmit}
          validationSchema={otpValidation}
        >
          {({ errors }) => (
            <Form>
              <Box my="8rem">
                <TextInput label="Pin" placeholder="Enter Pin" maxLength={6} name="pin" />

                <ShowError
                  status={status}
                  error={error === "Invalid credentials" ? "pin or mobile incorrect" : error}
                />
              </Box>

              <StyledButton width="full" type="submit" disabled={Boolean(errors.pin)}>
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

import React, { Fragment } from "react";
import { queryCache, useMutation } from "react-query";
import { Box } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { getStartedValidation } from "utils/validationSchema";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";

import { validateUser } from "lib/auth";
import { FormContainer, TitleWrapper, DescriptionWrapper } from "layout/AuthLayout/styles";
import { normalizeMobile } from "utils/formatNumber";

const GetStarted = () => {
  const { push } = useHistory();

  const [mutate, { isLoading }] = useMutation(validateUser);

  async function handleSubmit({ mobile }) {
    const data = await mutate(
      { mobile: normalizeMobile(mobile) },
      {
        onSuccess: async () => {
          return await queryCache.invalidateQueries("user");
        }
      }
    );

    if (data?.validUser === true) {
      push({ pathname: "/login", state: { mobile: normalizeMobile(mobile) } });
    } else if (data?.validUser === false) {
      push({ pathname: "/verify", state: { mobile: normalizeMobile(mobile) } });
    }
  }

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
                  autoFocus
                />
                <Box my="2rem" as="p">
                  Ensure you have access to this number.
                </Box>
              </Box>
              <StyledButton width="full" type="submit" isLoading={Boolean(isLoading)}>
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

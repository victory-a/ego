import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { Box } from "@chakra-ui/core";
import { TitleContainer, TitleWrapper, Description } from "styles/appLayout";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import StyledButton from "components/CustomButton";

const GetStarted = () => {
  const handleSubmit = () => {};

  return (
    <Fragment>
      <TitleContainer>
        <TitleWrapper>
          Make Payments
          <span className="secondary">However, Whenever!</span>
        </TitleWrapper>

        <Description>
          Get started sending, receiving, spending and paying bills with just your phone number.
        </Description>

        <Formik initialValues={{ mobile: "" }} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Box my="6rem">
                <PhoneNumberInput
                  name="mobile"
                  label="Phone number"
                  placeholder="Enter Phone Number"
                />
                <Box my="2rem" as="p">
                  Ensure you have access to this number.
                </Box>
              </Box>
              <StyledButton width="full" isLoading={false}>
                Get Started
              </StyledButton>
            </Form>
          )}
        </Formik>
      </TitleContainer>
    </Fragment>
  );
};

export default GetStarted;

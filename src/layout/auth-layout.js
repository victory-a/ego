import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";
import { ReactComponent as Logo } from "assets/eyowo-logo.svg";
import { AppContainer, LogoWrapper, FormWrapper } from "styles/appLayout";

const AuthLayout = ({ children }) => {
  return (
    <AppContainer>
      <LogoWrapper>
        <span role="img" aria-label="ego-logo">
          <Logo />
        </span>
      </LogoWrapper>

      <FormWrapper>
        <section>{children}</section>
      </FormWrapper>

      <Flex my="2rem" direction="column" align="center">
        <Box as="p">By clicking on Get Started, you agree to our</Box>
        <Link color="ego.primary">Terms & Conditions</Link>
      </Flex>
    </AppContainer>
  );
};

export default AuthLayout;

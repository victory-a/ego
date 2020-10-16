import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Link, Flex } from "@chakra-ui/core";
import { ReactComponent as Logo } from "assets/eyowo-logo.svg";
import { AppContainer, LogoWrapper, FormWrapper } from "styles/appLayout";

const AuthLayout = ({ children }) => {
  let location = useLocation();
  const [showTermsAndConditions, setShowTermsAndConditions] = React.useState(false);

  React.useLayoutEffect(() => {
    if (location?.pathname === "/") {
      setShowTermsAndConditions(true);
    }
  }, [location.pathname]);

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

      {showTermsAndConditions ? (
        <Flex my="2rem" direction="column" align="center">
          <Box as="p">By clicking on Get Started, you agree to our</Box>
          <Link color="ego.primary">Terms & Conditions</Link>
        </Flex>
      ) : null}
    </AppContainer>
  );
};

export default AuthLayout;

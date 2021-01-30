import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Link, Flex } from "@chakra-ui/core";
import { AuthContainer, LogoWrapper, FormWrapper, Credits } from "./styles";

const AuthLayout = ({ children }) => {
  let location = useLocation();
  const [showTermsAndConditions, setShowTermsAndConditions] = React.useState(false);

  React.useLayoutEffect(() => {
    if (location?.pathname === "/") {
      setShowTermsAndConditions(true);
    }
  }, [location.pathname]);

  return (
    <AuthContainer>
      <LogoWrapper>
        <span role="img" aria-label="ego-logo">
          Ego
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
      <Credits>
        Inspired by{" "}
        <span>
          <a href="https://app.eyowo.com/phone">Eyowo Web</a>
        </span>{" "}
        built by{" "}
        <span>
          <a href="https://twitter.com/victoryasokomeh">Victory</a>
        </span>
      </Credits>
    </AuthContainer>
  );
};

export default AuthLayout;

import React from "react";
import styled from "styled-components";
import { Spinner as Loader } from "@chakra-ui/core";

const FullSpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
`;

export function FullPageSpinner(props) {
  return (
    <FullSpinnerContainer>
      <Loader size="xl" color="ego.primary" emptyColor="gray.200" {...props} />
    </FullSpinnerContainer>
  );
}

export function Spinner(props) {
  return (
    <SpinnerContainer>
      <Loader size="md" color="ego.white" {...props} />
    </SpinnerContainer>
  );
}

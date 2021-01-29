import React from "react";
import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";
import colors from "styles/colors";

const StyledP = styled.p`
  display: flex;
  margin: 1rem 0;
  font-size: 1.4rem;
  color: ${colors?.red};
  align-items: flex-start;

  svg {
    width: 30px;
    margin-top: 0.25rem;
    margin-right: 0.25rem;
  }
`;

const ErrorLog = ({ children }) => (
  <StyledP>
    <FiAlertCircle aria-label="error" />
    {children}
  </StyledP>
);

export function ShowError({ status, error }) {
  if (status === "error" && typeof error === "string") {
    return <ErrorLog>{error}</ErrorLog>;
  }

  return null;
}

export default ErrorLog;

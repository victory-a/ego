import styled from "styled-components";
import { Button } from "@chakra-ui/core";

import colors from "styles/colors";

const StyledButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.primary};
  transform: translateY(0px);
  transition: all 0.9s ease-in-out;
  background: ${colors.primary} !important;
  border-radius: 5px;

  &:hover {
    transform: translateY(1.5px);
  }
`;

export default StyledButton;

import styled from "styled-components";
import { Button } from "@chakra-ui/core";

import colors from "styles/colors";

const StyledButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.primary};
  transform: translateY(0px);
  transition: transform 0.5s !important;
  background: ${colors.primary} !important;
  border-radius: 5px;
  padding: 2rem;
  font-size: 1.4rem !important;

  &:hover {
    transform: translateY(-1.5px);
  }
`;

export default StyledButton;

import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 85rem;
  margin: 2rem auto;
  border: 1px solid ${colors.cyanBlue};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  padding: 2.5rem 0;
  padding-top: 0;
  border-radius: 10px;
  background: ${colors.white};
`;

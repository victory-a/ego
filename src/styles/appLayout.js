import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 4.5rem;

  svg {
    height: 35px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 45rem;
  width: 95%;
  border-radius: 10px;
  padding: 3rem;
  background-color: ${colors.white};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
`;

export const TitleContainer = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${colors.blackout};
  margin-bottom: 3rem;

  & .secondary {
    color: ${colors.primary};
  }
`;

export const Description = styled.p`
  text-align: center;
  color: ${colors.darkGrey};
  font-weight: bold;
`;

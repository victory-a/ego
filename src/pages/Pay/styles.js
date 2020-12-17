import styled from "styled-components";
import colors from "styles/colors";
// import { device } from "styles";

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

export const TabWrapper = styled.div`
  padding: 2.5rem;

  & > p {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    color: ${colors.fauxBlack};
  }

  & .inline-fields {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 0.5px 20px;
    padding-right: 30px;
    margin-bottom: 20px;

    & .remove {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 10px;
    }
  }

  & button {
    vertical-align: middle;
    font-size: 14px !important;
    font-weight: bold;

    svg {
      display: inline;
      margin-right: 5px;
    }
    :focus {
      outline: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 3rem auto;
  margin-bottom: 1rem;
  width: 90%;
  max-width: 32rem;

  & button {
    width: 100% !important;
  }
`;

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

export const TabWrapper = styled.section`
  padding: 2.5rem;

  & > p,
  .provider {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: ${colors.fauxBlack};

    &.error {
      color: ${colors.red};
    }

    svg {
      display: inline-block;
      margin-right: 3px;
      margin-bottom: 2px;
    }
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

export const SubscriberArray = styled.div`
  padding-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & .subscriber {
    border: 3px solid transparent;
    border-radius: 5px;
    width: 5rem;
    height: 5rem;
    margin-bottom: 10px;
    cursor: pointer;
    /* border: 0.5px solid transparent; */
    border: 0.5px solid ${colors.primaryHoverLighter};

    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }

    img {
      padding: 1px;
      width: 100%;
      height: 100%;
      border: none;
    }

    &.active {
      border: 0.5px solid ${colors.primary};
      background: ${colors.primaryHoverLighter};
    }
  }

  & button.self {
    position: relative;
    border: 0.5px solid ${colors.primaryHoverLight};

    &::after {
      content: "Self";
      position: absolute;
      text-align: center;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: ${colors.white};
      font-size: 10px;
      background: rgba(44, 19, 56, 0.8);

      width: 100%;
    }
  }
`;

export const SavedBanksWrapper = styled.ul`
  display: flex;
  overflow-y: scroll;
  padding-bottom: 25px;

  & span {
    svg {
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background: ${colors.primaryHoverLighter};
      }
    }
  }

  & li.active {
    border: 0.5px solid ${colors.primary} !important;
    background: ${colors.primaryHoverLighter} !important;
  }
  /* } */
`;

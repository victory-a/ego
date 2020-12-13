import styled from "styled-components";
import colors from "styles/colors";

export const HomeWrapper = styled.section`
  padding: 3rem 2rem;
  max-width: 75rem;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border: 1px solid ${colors.cyanBlue};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  padding: 2.5rem;
  border-radius: 10px;
  background: ${colors.white};
`;

export const InlineCardWrapper = styled(CardWrapper)`
  padding: 0 0 2rem 0;
  margin-bottom: 0;

  &.transactions {
    border: 1px solid red;
  }
`;

export const CardWrapperWithMargin = styled(InlineCardWrapper)`
  @media (max-width: 699px) {
    margin-bottom: 4rem;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  background: ${colors.ghostWhite};
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${colors.darkCharcoal};
    font-size: 1.6rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: ${colors.fauxBlack};
    font-weight: bold;

    &.active {
      cursor: pointer;
      transition: color 0.4s ease-in-out;

      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;

export const TransactionList = styled.ul`
  & li {
    transition: background-color 0.4s ease-in;
    cursor: pointer;
    padding: 2rem;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${colors.cyanBlue};
    }

    &:last-of-type {
      padding-bottom: 0;
    }

    &:hover {
      background: ${colors.primaryHoverLighter};
    }

    & img {
      height: 4rem;
      width: 4rem;
    }

    & h4 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      color: ${colors.darkCharcoal};
      font-weight: bold;
    }

    & .description {
      font-size: 1.2rem;
    }

    & .amount {
      font-size: 1.4rem;
      color: ${colors.brightGreen};

      &.debit {
        color: ${colors.brightRed};
      }
    }
  }
`;

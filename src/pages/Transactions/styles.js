import styled from "styled-components";
import colors from "styles/colors";

export const TransactionsWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border: 1px solid ${colors.cyanBlue};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  padding: 2.5rem 0;
  padding-top: 0;
  border-radius: 10px;
  background: ${colors.white};
`;

export const CardTitle = styled.div`
  width: 100%;
  background: ${colors.ghostWhite};
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${colors.primary};
    font-weight: bold;
    font-size: 1.6rem;
  }

  button {
    font-size: 13px !important;
  }
`;

export const TransactionList = styled.ul`
  /* h2 {
    padding: 0 2rem;
    color: ${colors.primary};
    font-weight: bold;
    font-size: 1.8rem;
  } */

  & li {
    transition: background-color 0.4s ease-in;
    cursor: pointer;
    padding: 2rem;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${colors.cyanBlue};
    }

    &:not(.transaction-group):hover {
      background: ${colors.primaryHoverLighter};
    }

    &.transaction-group {
      padding: 2rem 0;
    }

    & img {
      height: 4rem;
      width: 4rem;
    }

    & h3 {
      font-weight: bold;
      font-size: 1.6rem;
      color: ${colors.darkCharcoal};
      margin-bottom: 10px;
      padding: 0 2rem;
    }

    & h4 {
      margin-bottom: 0.5rem;
      color: ${colors.darkCharcoal};
      font-size: 1.4rem;
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

  & li:not(:first-of-type) {
    & h3 {
      margin-top: 1.8rem;
    }
  }
`;

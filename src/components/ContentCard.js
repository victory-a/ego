import React from "react";
import styled from "styled-components";
import colors from "styles/colors";

export const FullCard = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border: 1px solid #eaedf3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  padding: 2.5rem;
  border-radius: 10px;
  background: ${colors.white};
`;

export const InlineCardWrapper = styled(CardWrapper)`
  padding: 0 0 2.5rem 0;
  margin-bottom: 0;
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

  label {
    font-size: 1.2rem;
  }
`;

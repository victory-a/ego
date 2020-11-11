import React from "react";
import { device } from "styles";
import styled from "styled-components";
import { nairaFormat } from "utils/amountFormatters";

export default function NairaFormatter({ amount }) {
  return (
    <Count>
      <sup>₦</sup>
      {nairaFormat(amount).naira}
      <sub>{nairaFormat(amount).kobo}</sub>
    </Count>
  );
}

export function AudioMoney() {
  return (
    <AudioMoneyContainer>
      <span role="img" aria-labelledby="cha-ching">
        💸💸💸💸
      </span>
    </AudioMoneyContainer>
  );
}

const Count = styled.h3`
  color: #333;
  font-size: 2.4rem;
  font-weight: bold;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  sup {
    top: -0.4em;
    font-size: 60%;
    margin-right: 5px;
  }

  sub {
    opacity: 0.4;
    font-size: 60%;
    bottom: -0.05em;
  }
`;

const AudioMoneyContainer = styled.div`
  display: flex;

  span[role="img"] {
    font-size: 2.4rem;

    @media ${device.tablet} {
      font-size: 3rem;
    }
  }
`;

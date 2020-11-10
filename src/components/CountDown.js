import React from "react";
import styled from "styled-components";
import colors from "styles/colors";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft => timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <>
      {timeLeft > 0 ? (
        <CountdownWrapper>Resend code in {`(${timeLeft})`}</CountdownWrapper>
      ) : (
        <LightCountdownWrapper>
          Didn't get code? <span className="resend-otp">Click here</span>
        </LightCountdownWrapper>
      )}
    </>
  );
};

export default CountdownTimer;

const CountdownWrapper = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 1.5rem 0;

  & span {
    color: ${colors.primary};
  }

  .resend-otp {
    color: ${colors.primary};
    cursor: pointer;
    font-weight: bold;
  }
`;

const LightCountdownWrapper = styled(CountdownWrapper)`
  font-weight: normal;
`;

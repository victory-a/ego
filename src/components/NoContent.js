import React from "react";
import styled from "styled-components";
import { ReactComponent as Empty } from "assets/no-content.svg";

const NoContent = ({ caption = "No content!" }) => {
  return (
    <ImageWrapper>
      <Empty />
      <p>{caption}</p>
    </ImageWrapper>
  );
};

export default NoContent;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    top: 0;
    margin: 1.5rem 0;
    animation: bounce 3.5s infinite;
  }

  p {
    font-weight: bold;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

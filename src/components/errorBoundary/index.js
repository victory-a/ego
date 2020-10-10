import React, { Component } from "react";
import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 4rem);

  h2 {
    font-size: 10rem;
  }
`;

const Message = styled.div`
  border: 2px ${colors.primary} solid;
  border-radius: 5px;
  font-size: 24px;
  color: ${colors.primary};
  text-align: center;
  padding: 20px;

  @media ${device.laptop} {
    padding: 40px;
  }
`;

const ErrorBoundaryFallbackComponent = () => (
  <Container>
    <Message>
      Hey, something went wrong! .. Please refresh!
      <span role="img" aria-label="face-emoji">
        {" "}
        😞
      </span>
    </Message>
  </Container>
);

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorBoundaryFallbackComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

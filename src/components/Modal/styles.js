import styled from "styled-components";
import { device } from "styles";

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.2s;
  flex: 0 0 auto;
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 4;
  border-radius: 5px;
  background-color: rgba(18, 39, 140, 0.1);

  &:focus {
    outline: none;
  }
`;

const ModalTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: 0;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #eaedf3;

  @media ${device.tablet} {
    text-align: left;
    margin-left: 1.5rem;
  }
`;

export { CloseButton, ModalTitle };

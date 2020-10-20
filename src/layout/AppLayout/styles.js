import styled from "styled-components";
// import { device } from "styles";
import colors from "styles/colors";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MainContentWrapper = styled.main`
  width: 100%;
  max-width: 85rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const TopNavContainer = styled.nav`
  width: 100%;
  height: 6.6rem;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.cyanBlue};
  box-shadow: 0px 1.0566px 10.566px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 2rem;
  z-index: 400;
`;

export const BottomNavContainer = styled.footer`
  width: 100%;
  height: 6.5rem;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 0 2rem;
  background: ${colors.white};
  border-top: 1px solid ${colors.cyanBlue};
  box-shadow: 0px 1.0566px 10.566px rgba(0, 0, 0, 0.04);
  z-index: 400;
`;

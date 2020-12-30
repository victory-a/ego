import styled from "styled-components";
import { device } from "styles";
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
  min-height: calc(100vh - 6.6rem);
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 0 2rem;

  /* margin to prevent the floating bottom bar from covering content on mobile */
  margin-bottom: 5.5rem;

  @media ${device.tablet} {
    magin-bottom: 0;
  }
`;

export const TopNavContainer = styled.nav`
  width: 100vw;
  height: 6.6rem;
  position: sticky;
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

export const InlineFields = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;

    > div {
      width: 100%;
    }

    div:not(:last-child) {
      margin-right: 4%;
    }
  }
`;

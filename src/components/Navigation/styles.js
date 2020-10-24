import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";

export const TopNavigationWrapper = styled.div`
  width: 100%;
  max-width: 119.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navlist = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 3.5rem;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
  }

  & li:not(:last-of-type) {
    margin-right: 5rem;
  }
`;

export const NavListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    color: ${colors.inactive};
    transition: color 0.32s ease-in-out;

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      color: ${colors.primary};
    }
  }

  svg {
    margin-right: 1rem;
    font-size: 20px;
  }

  p {
    margin-top: 0.3rem;
    font-weight: bold;
  }
`;

export const BottomNavList = styled(Navlist)`
  display: flex;
  justify-content: space-evenly;
  margin: 0;

  li {
    flex: 1;
  }

  & li:not(:last-of-type) {
    margin-right: initial;
  }
`;

export const BottomNavListItem = styled(NavListItem)`
  height: 100%;

  /* & .active {
    padding: 0.7rem;
    border-top: 2px solid ${colors.primary};
  } */

  a {
    flex-direction: column;
    text-align: center;
    height: 100%;
  }

  svg {
    margin-right: initial;
    font-size: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  margin-right: 2rem;
  /* display: flex; */
  /* align-items: center; */
  cursor: pointer;

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: center;
  }

  /* p {
    display: none;

    font-size: 1.4rem;
    color: ${colors.black};
    font-weight: bold;
    margin-left: 1rem;

    @media ${device.tablet} {
      display: initial;
    }
  } */
`;

export const BottomNavigationWrapper = styled.div``;

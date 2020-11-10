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
  border-left: 1px solid #eaedf3;
  border-right: 1px solid #eaedf3;

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

export const BottomNavList = styled.footer`
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 100%;
  width: 100%;
`;

export const BottomNavListItem = styled(NavListItem)`
  height: 100%;
  flex: 1;

  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 1rem;
    border-top: 2.5px solid ${colors.white};

    &.active {
      border-color: ${colors.primary};
    }
  }

  svg {
    margin-right: initial;
    font-size: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  margin-right: 2rem;
  display: flex;
  cursor: pointer;

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: center;
  }
`;

export const BottomNavigationWrapper = styled.div``;

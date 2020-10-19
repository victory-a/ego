import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Avatar } from "@chakra-ui/core";
import navList from "routes/navList";

import {
  TopNavigationWrapper,
  UserInfoContainer,
  Navlist,
  NavListItem,
  BottomNavList,
  BottomNavListItem
} from "./styles";
import { ReactComponent as EyowoLogo } from "assets/eyowo-logo.svg";

export function TopNav() {
  const { pathname } = useLocation();

  return (
    <TopNavigationWrapper>
      <Link to="/">
        <EyowoLogo />
      </Link>

      <Navlist>
        {navList.map(link => {
          if (link.path === "/") {
            return (
              <NavListItem key={`navlink-${link.path}`}>
                <NavLink to={link.path} activeClassName={`${pathname === "/" && "active"}`}>
                  {link.logo}
                  <p>{link.title}</p>
                </NavLink>
              </NavListItem>
            );
          }
          return (
            <NavListItem key={`navlink-${link.path}`}>
              <NavLink to={link.path} activeClassName="active">
                {link.logo}
                <p>{link.title}</p>
              </NavLink>
            </NavListItem>
          );
        })}
      </Navlist>

      <UserInfoContainer>
        <Avatar />
        <p>Soks</p>
      </UserInfoContainer>
    </TopNavigationWrapper>
  );
}

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <BottomNavList>
      {navList.map(link => {
        if (link.path === "/") {
          return (
            <BottomNavListItem key={`navlink-${link.path}`}>
              <NavLink to={link.path} activeClassName={`${pathname === "/" && "active"}`}>
                {link.logo}
                <p>{link.title}</p>
              </NavLink>
            </BottomNavListItem>
          );
        }
        return (
          <BottomNavListItem key={`navlink-${link.path}`}>
            <NavLink to={link.path} activeClassName="active">
              {link.logo}
              <p>{link.title}</p>
            </NavLink>
          </BottomNavListItem>
        );
      })}
    </BottomNavList>
  );
}

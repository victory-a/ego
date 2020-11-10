import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Box, Flex } from "@chakra-ui/core";
import { IoIosLogOut } from "react-icons/io";
import maleFB from "assets/male-fb.svg";

import navList from "routes/navList";

import {
  TopNavigationWrapper,
  UserInfoContainer,
  Navlist,
  NavListItem,
  BottomNavList,
  BottomNavListItem
} from "./styles";
// import { ReactComponent as EyowoLogo } from "assets/eyowo-logo.svg";

export function TopNav() {
  const { pathname } = useLocation();

  return (
    <TopNavigationWrapper>
      <Link to="/">
        {/* <EyowoLogo /> */}
        logo
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
        <Menu autoSelect={false}>
          <MenuButton>
            <Flex alignItems="center">
              <Avatar name="Victory Asokomeh" src={maleFB} mr="1rem" />
              <p>soks</p>
            </Flex>
          </MenuButton>
          <MenuList borderRadius="8px" placement="bottom" border="0.5px solid #2C1338">
            <MenuItem p="1rem">
              <Box as="span" mr="0.5rem">
                <IoIosLogOut />
              </Box>
              <span>Logout</span>
            </MenuItem>
          </MenuList>
        </Menu>
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

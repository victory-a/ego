import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import navList from "routes/navList";

import { Menu, MenuButton, MenuList, MenuItem, Avatar, Box, Flex } from "@chakra-ui/core";
import { IoIosLogOut } from "react-icons/io";
import maleFB from "assets/male-fb.svg";
import { ReactComponent as EyowoLogo } from "assets/eyowo-logo.svg";
import { useQuery, queryCache } from "react-query";

import {
  TopNavigationWrapper,
  UserInfoContainer,
  Navlist,
  NavListItem,
  BottomNavList,
  BottomNavListItem
} from "./styles";

export function TopNav() {
  const { pathname } = useLocation();
  const { handleLogout } = useAuth();
  const data = queryCache.getQueryData("user");

  return (
    <TopNavigationWrapper>
      <Link to="/">
        {/* <EyowoLogo /> */}
        Ego
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
          <MenuButton _focus={{ outline: "none" }}>
            <Flex alignItems="center">
              <Avatar name="Victory Asokomeh" src={maleFB} mr="1rem" />
              <p>{data?.user?.mobile}</p>
            </Flex>
          </MenuButton>
          <MenuList borderRadius="8px" placement="bottom" border="0.5px solid #2C1338">
            <MenuItem p="1rem" onClick={handleLogout}>
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

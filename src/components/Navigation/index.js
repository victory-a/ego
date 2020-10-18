import React from "react";
import { TopNavigationWrapper } from "./styles";
import { ReactComponent as EyowoLogo } from "assets/eyowo-logo.svg";
export function TopNav() {
  return (
    <TopNavigationWrapper>
      <EyowoLogo />
      <p>Hello</p>
    </TopNavigationWrapper>
  );
}

export function BottomNav() {
  return <div></div>;
}

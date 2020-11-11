import React from "react";
import { HomeWrapper } from "./styles";
import WelcomeDisplay from "components/WelcomeDisplay";
import BalanceDisplay from "components/BalanceDisplay";
import QuickActions from "components/QuickActions";
import { Grid } from "@chakra-ui/core";

const user = {
  userName: "soks",
  balance: 734500000
};

const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeDisplay userName={user.userName} />
      <BalanceDisplay balance={user.balance} />
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gridColumnGap="2rem"
        overflow="hidden"
      >
        <QuickActions />
        <QuickActions />
      </Grid>
    </HomeWrapper>
  );
};

export default Home;

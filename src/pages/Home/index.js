import React from "react";
import { HomeWrapper } from "./styles";
import WelcomeDisplay from "pages/Home/WelcomeDisplay";
import BalanceDisplay from "pages/Home/BalanceDisplay";
import QuickActions from "pages/Home/QuickActions";
import QuickTransactions from "pages/Home/QuickTransactions";
import { Grid } from "@chakra-ui/core";
import LatestTransaction from "pages/Home/LatestTransaction";

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
        gap="2rem"
        // overflow="hidden"
        margin="2rem 0"
      >
        <QuickActions />
        <QuickTransactions />
      </Grid>

      <LatestTransaction />
    </HomeWrapper>
  );
};

export default Home;

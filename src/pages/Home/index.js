import React from "react";
import { useQuery, queryCache } from "react-query";
import { HomeWrapper } from "./styles";
import WelcomeDisplay from "pages/Home/WelcomeDisplay";
import BalanceDisplay from "pages/Home/BalanceDisplay";
import QuickActions from "pages/Home/QuickActions";
import QuickTransactions from "pages/Home/QuickTransactions";
import { Grid } from "@chakra-ui/core";
import LatestTransaction from "pages/Home/LatestTransaction";
import { getBalance } from "lib/transaction";

// const user = {
//   userName: "User"
// };

const Home = () => {
  const { data: balance } = useQuery("getBalance", getBalance);
  const data = queryCache.getQueryData("user");

  return (
    <HomeWrapper>
      <WelcomeDisplay userName={data?.user?.mobile} />
      <BalanceDisplay balance={balance ?? 0} />
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

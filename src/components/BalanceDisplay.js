import React from "react";
import { FullCard } from "./ContentCard";
import { Box, Switch } from "@chakra-ui/core";
import NairaFormatter, { AudioMoney } from "./NairaFormatter";
import { AboveTabletScreen } from "layout/viewports";

const BalanceDisplay = ({ balance }) => {
  const [showBalance, setShowBalance] = React.useState(true);

  return (
    <FullCard>
      <Box d="flex" alignItems="center" justifyContent="space-between" mb="3rem">
        <Box as="p" color="ego.lightBrown" fontSize="12px">
          <AboveTabletScreen>AVAILABLE</AboveTabletScreen> BALANCE
        </Box>
        <Box as="span" d="flex">
          <Box as="p" mr="1rem">
            Show <AboveTabletScreen>balance</AboveTabletScreen>
          </Box>
          <Switch size="lg" value={showBalance} onChange={() => setShowBalance(!showBalance)} />
        </Box>
      </Box>
      <Box height="3.5rem">
        {showBalance ? <NairaFormatter amount={balance} /> : <AudioMoney />}
      </Box>
    </FullCard>
  );
};

export default BalanceDisplay;

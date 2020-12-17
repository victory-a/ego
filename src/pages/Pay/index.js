import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { useMediaQuery } from "react-responsive";

import Phone from "./Phone";
import Bank from "./Bank";
import Bills from "./Bills";
import Airtime from "./Airtime";

import { Wrapper } from "./styles";

const tabOptions = [
  { label: "Send to Phone", content: Phone },
  { label: "Send to Bank", content: Bank },
  { label: "Pay Bills", content: Bills },
  { label: "Buy Airtime", content: Airtime }
];

const tabOptions2 = [
  { label: "Phone", content: Phone },
  { label: "Bank", content: Bank },
  { label: "Bills", content: Bills },
  { label: "Airtime", content: Airtime }
];

const Pay = () => {
  const smallScreens = useMediaQuery({ maxWidth: 500 });

  return (
    <Wrapper>
      <Tabs
        outline="none !important"
        paddingX="5px"
        variantColor="ego.red"
        isFitted={smallScreens ? true : false}
      >
        <TabList>
          {smallScreens
            ? tabOptions2.map((tab, i) => (
                <Tab
                  padding="1.3rem"
                  fontSize="1.4rem !important"
                  fontWeight="bold"
                  borderBottomWidth="1px"
                  // color="ego.primary"
                  key={`tab-${i}`}
                >
                  {tab.label}
                </Tab>
              ))
            : tabOptions.map((tab, i) => (
                <Tab
                  padding="1.3rem"
                  fontSize="1.4rem !important"
                  fontWeight="bold"
                  borderBottomWidth="1px"
                  // color="ego.primary"
                  key={`tab-${i}`}
                >
                  {tab.label}
                </Tab>
              ))}
        </TabList>

        <TabPanels>
          {tabOptions.map(({ content: Component }, i) => (
            <TabPanel key={`tab panel-${i}`}>
              {
                <div>
                  <Component />
                </div>
              }
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Pay;

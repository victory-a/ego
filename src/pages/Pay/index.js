/* eslint-disable indent */
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
  { label: "Buy Airtime", content: Airtime },
  { label: "Pay Bills", content: Bills }
];

const tabOptions2 = [
  { label: "Phone", content: Phone },
  { label: "Bank", content: Bank },
  { label: "Airtime", content: Airtime },
  { label: "Bills", content: Bills }
];

const Pay = () => {
  const smallScreens = useMediaQuery({ maxWidth: 500 });
  const [currentTab, setCurrentTab] = React.useState(3);

  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get("tab");

  React.useLayoutEffect(() => {
    setCurrentTab(Number(tab));
  }, [tab]);

  return (
    <Wrapper>
      {currentTab !== null ? (
        <Tabs
          outline="none !important"
          paddingX="5px"
          isFitted={smallScreens ? true : false}
          defaultIndex={currentTab}
        >
          <TabList>
            {smallScreens
              ? tabOptions2.map((tab, i) => (
                  <Tab
                    padding="1.3rem"
                    fontSize="1.4rem !important"
                    fontWeight="bold"
                    borderBottomWidth="1px"
                    // color="ego.inactive"
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
                    // color="ego.inactive"
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
      ) : null}
    </Wrapper>
  );
};

export default Pay;

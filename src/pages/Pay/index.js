/* eslint-disable indent */
import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Phone from "./Phone";
import Bank from "./Bank";
import Bills from "./Bills";
import Airtime from "./Airtime";

import { Wrapper } from "./styles";

const tabOptions = [
  { label: "Send to Phone", content: Phone },
  { label: "Buy Airtime", content: Airtime },
  { label: "Send to Bank", content: Bank },
  { label: "Pay Bills", content: Bills }
];

const tabOptions2 = [
  { label: "Phone", content: Phone },
  { label: "Bank", content: Bank },
  { label: "Bills", content: Bills },
  { label: "Airtime", content: Airtime }
];

const Pay = () => {
  const smallScreens = useMediaQuery({ maxWidth: 500 });
  const [tabIndex, setTabIndex] = React.useState(0);

  const { search } = useLocation();

  React.useLayoutEffect(() => {
    const queryParam = search.split("=")[1];
    if (queryParam) {
      setTabIndex(queryParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Tabs
        outline="none !important"
        paddingX="5px"
        // variantColor="ego.red"
        isFitted={smallScreens ? true : false}
        defaultIndex={tabIndex}
        // index={tabIndex}
        // onChange={index => setTabIndex(index)}
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

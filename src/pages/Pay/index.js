import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { Wrapper } from "./styles";

const tabOptions = [
  { label: "Send to Phone", content: "" },
  { label: "Send to bank", content: "" },
  { label: "Pay bills", content: "" },
  { label: "Buy airtime", content: "" }
];
const Pay = () => {
  return (
    <Wrapper>
      <Tabs outline="none !important" variantColor="ego.primary">
        <TabList backgroundColor="#f6f6f8">
          {tabOptions.map((tab, i) => (
            <Tab
              padding="1rem 1.3rem"
              fontSize="14px !important"
              fontWeight="bold"
              key={`tab-${i}`}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Pay;

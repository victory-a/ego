import React from "react";
import { Accordion } from "@chakra-ui/core";

import AccordionGroup from "components/AccordonGroup";

import { RiHomeGearLine, RiTvLine } from "react-icons/ri";

import { TabWrapper } from "../styles";
import Utility from "./Utility";
import TVBills from "./TVBills";

const Bills = () => {
  return (
    <TabWrapper>
      <Accordion>
        <AccordionGroup icon={RiTvLine} title="TV Bills">
          <TVBills />
        </AccordionGroup>
        <AccordionGroup icon={RiHomeGearLine} title="Utlity Bills">
          <Utility />
        </AccordionGroup>
      </Accordion>
    </TabWrapper>
  );
};

export default Bills;

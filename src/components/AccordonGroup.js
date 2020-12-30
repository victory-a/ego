import React from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/core";

const AccordonGroup = ({ icon: Component, title, children, ...props }) => {
  return (
    <AccordionItem {...props}>
      <AccordionHeader
        py="10px"
        _expanded={{ bg: "ego.primaryHoverLighter" }}
        _focus={{ outline: "none" }}
      >
        <Box flex="1" textAlign="left">
          <p className="titleGroup">
            <span>
              <Component fontSize={15} />
            </span>
            {title}
          </p>
        </Box>
        <AccordionIcon fontSize="15px" />
      </AccordionHeader>
      <AccordionPanel py="10px">{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordonGroup;

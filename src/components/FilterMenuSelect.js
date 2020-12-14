import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

const FilterMenuSelect = ({ selected, setSelected }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon="chevron-down"
        width="10rem"
        height="30px"
        border=".8px solid #2C1338"
        background="transparent"
        fontSize="12px"
      >
        {selected.label}
      </MenuButton>
      <MenuList>
        {menuOptions.map((option, index) => (
          <MenuItem key={`option-${index}`} onClick={() => setSelected(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterMenuSelect;

const menuOptions = [
  {
    label: "All",
    value: "all"
  },
  {
    label: "Debit",
    value: "debit"
  },
  {
    label: "Credit",
    value: "credit"
  }
];

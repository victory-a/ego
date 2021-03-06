import React from "react";
import appendBankImage from "utils/appendBankImage";
import { Box, Flex, Image } from "@chakra-ui/core";
import { IoIosClose } from "react-icons/io";

const BankAccountCard = ({ beneficiary, onDelete, selected, ...props }) => {
  beneficiary.image = appendBankImage(beneficiary);
  const { image, accountNumber, bankName, accountName } = beneficiary;

  return (
    <Box
      as="li"
      listStyleType="none"
      border="1px solid #eaedf3"
      borderRadius="5px"
      p="2rem"
      minWidth="280px"
      marginRight="20px"
      cursor="pointer"
      className={`${selected ? "active" : ""}`}
      {...props}
    >
      <Flex mb="20px" justify="space-between">
        <Image rounded="full" size="40px" src={image} alt={bankName} />
        <Box as="span" zIndex={4} aria-label="delete card button" onClick={onDelete}>
          <IoIosClose tabIndex="0" color="#2C1338" fontSize={28} />
        </Box>
      </Flex>
      <Box
        as="h4"
        mb="8px"
        textTransform="uppercase"
        letterSpacing="1px"
        fontSize="1.6rem"
        fontWeight="bold"
      >
        {accountName}
      </Box>
      <p>{`${bankName}: ${accountNumber}`}</p>
    </Box>
  );
};

export default BankAccountCard;

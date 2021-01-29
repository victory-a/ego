import React, { Fragment } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import { naira } from "utils/amountFormatters.js";

const Transaction = ({ transaction, onOpen, setCurrent }) => {
  const { image, metadata } = transaction;
  function toggleMoreDetails() {
    setCurrent(transaction);
    onOpen();
  }
  return (
    <Fragment>
      <li
        className="sudo-list"
        key={`transaction-${transaction._id}`}
        padding="2rem"
        onClick={toggleMoreDetails}
      >
        <Flex alignItems="center" justify="space-between" alt={`${transaction.category}`}>
          <Flex>
            <Image rounded="full" src={image} alt="transaction indicator" />
            <Flex direction="column" marginLeft="15px">
              <h4>{metadata.title}</h4>
              <p className="description">{metadata.description}</p>
            </Flex>
          </Flex>
          <Box>
            <p className={`amount ${transaction.category ?? "credit"}`}>
              {naira(transaction.amount)}
            </p>
          </Box>
        </Flex>
      </li>
    </Fragment>
  );
};

export default Transaction;

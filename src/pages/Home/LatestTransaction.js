import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

import { generateTitle, generateLabel } from "utils/formatTransaction";
import transactions from "data/transactions";
import { naira } from "utils/amountFormatters.js";

import { InlineCardWrapper, CardTitle, TransactionList } from "./styles.js";

const LatestTransaction = () => {
  return (
    <InlineCardWrapper>
      <CardTitle>
        <h3>Latest transaction</h3>
        <p className="active">View more</p>
      </CardTitle>
      <TransactionList>
        {transactions?.length
          ? transactions.splice(0, 3).map(transaction => {
              let image = generateLabel(transaction);
              return (
                <li key={transaction.id} padding="2rem">
                  <Flex alignItems="center" justify="space-between" alt={`${transaction.category}`}>
                    <Flex>
                      <Image rounded="full" src={image} alt="transaction indicator" />
                      <Flex direction="column" marginLeft="15px">
                        <h4>{generateTitle(transaction).title}</h4>
                        <p className="description">{generateTitle(transaction).description}</p>
                      </Flex>
                    </Flex>
                    <Box>
                      <p className={`amount ${transaction.category ?? "credit"}`}>
                        {naira(transaction.amount)}
                      </p>
                    </Box>
                  </Flex>
                </li>
              );
            })
          : null}
      </TransactionList>
    </InlineCardWrapper>
  );
};

export default LatestTransaction;

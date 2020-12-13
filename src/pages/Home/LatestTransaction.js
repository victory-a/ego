/* eslint-disable indent */
import React, { Fragment } from "react";
import { Box, Flex, Image, useDisclosure } from "@chakra-ui/core";
import Modal from "components/Modal";
import { generateMetadata, generateLabel } from "utils/formatTransaction";
import transactions from "data/transactions";
import { naira } from "utils/amountFormatters.js";

import { InlineCardWrapper, CardTitle, TransactionList } from "./styles.js";
import TransactionDetails from "./TransactionDetails.js";

const LatestTransaction = () => {
  // const sortedTransactions = React.useMemo(() => {
  //   transactions.splice(0, 3).map(transaction => {
  //     const label = generateLabel(transaction);
  //     const result = generateTitle(transaction);

  //     transaction.label = label;
  //     transaction.title = result.title;
  //     transaction.description = result.description;

  //     console.log(transaction)
  //     return transaction;
  //   });
  // }, []);

  return (
    <Fragment>
      <InlineCardWrapper>
        <CardTitle>
          <h3>Latest transaction</h3>
          <p className="active">View more</p>
        </CardTitle>
        <TransactionList>
          {transactions?.length > 0
            ? transactions.map(transaction => {
                let image = generateLabel(transaction);
                let metadata = generateMetadata(transaction);
                return (
                  <Transaction
                    {...{ transaction, image, metadata }}
                    key={`transaction-${transaction.id}`}
                  />
                );
              })
            : null}
        </TransactionList>
      </InlineCardWrapper>
    </Fragment>
  );
};

const Transaction = ({ transaction, image, metadata }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      {isOpen ? (
        <Modal
          {...{
            onClose,
            isOpen,
            overlayClose: true,
            title: "Transaction Details",
            size: { base: "90%", tablet: "80%", laptop: "550px" }
          }}
        >
          <TransactionDetails {...{ transaction, image, metadata }} />
        </Modal>
      ) : null}

      <li key={`transaction-${transaction.id}`} padding="2rem" onClick={onOpen}>
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

export default LatestTransaction;

/* eslint-disable indent */
import React, { Fragment } from "react";
import { Box, Flex, Image, useDisclosure } from "@chakra-ui/core";
import Modal from "components/Modal";
import { generateMetadata, generateLabel } from "utils/formatTransaction";
import transactions from "data/transactions";
import { naira } from "utils/amountFormatters.js";

import { InlineCardWrapper, CardTitle, TransactionList } from "./styles.js";
import TransactionDetails from "./TransactionDetails.js";
import NoContent from "components/NoContent.js";

const LatestTransaction = () => {
  const [transformedTransactions, setTransformedTransactions] = React.useState([]);
  // const [transactions] = useTransactions();

  React.useEffect(() => {
    transformTransactions();

    function transformTransactions() {
      const transformed = transactions.splice(0, 3).map(transaction => {
        transaction.image = generateLabel(transaction);
        transaction.metadata = generateMetadata(transaction);
        return transaction;
      });
      return setTransformedTransactions(transformed);
    }
  }, []);

  return (
    <Fragment>
      <InlineCardWrapper>
        <CardTitle>
          <h3>Latest transaction</h3>
          <p className="active">View more</p>
        </CardTitle>
        <TransactionList>
          {transformedTransactions?.length > 0 ? (
            transformedTransactions.map(transaction => {
              return (
                <Transaction transaction={transaction} key={`transaction-${transaction.id}`} />
              );
            })
          ) : (
            <NoContent caption="No transactions!" />
          )}
        </TransactionList>
      </InlineCardWrapper>
    </Fragment>
  );
};

const Transaction = ({ transaction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { image, metadata } = transaction;

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
          <TransactionDetails transaction={transaction} />
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

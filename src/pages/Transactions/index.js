import React from "react";
import { useDisclosure, Box } from "@chakra-ui/core";
import transactions from "data/transactions";
import dayjs from "dayjs";

import Transaction from "components/Transaction";
import TransactionDetails from "components/TransactionDetails.js";
import Modal from "components/Modal";

import format from "data/format";
import { generateMetadata, generateLabel } from "utils/formatTransaction";
import { TransactionList, TransactionsWrapper } from "./styles";

const Transactions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = React.useState(null);

  function appendImageAndMetadata(transactions) {
    return transactions.map(transaction => {
      transaction.image = generateLabel(transaction);
      transaction.metadata = generateMetadata(transaction);
      return transaction;
    });
  }

  const transformedTransactions = React.useMemo(() => appendImageAndMetadata(transactions), []);
  const refinedTransactions = React.useMemo(() => format(transformedTransactions), [
    transformedTransactions
  ]);

  return (
    <Box maxWidth="850px" width="100%" margin="3rem auto">
      <TransactionsWrapper>
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
            <TransactionDetails transaction={current} />
          </Modal>
        ) : null}
        <TransactionList>
          <h2>Recent Transactions</h2>
          {refinedTransactions.map(_ => {
            const date =
              dayjs().format("DD MMMM, YYYY") === dayjs(_.date).format("DD MMMM, YYYY")
                ? "Today"
                : dayjs(_.date).format("DD MMMM, YYYY");

            const details = _.transactions.map(transaction => (
              <Transaction
                {...{ transaction, onOpen, setCurrent, key: `transaction-${transaction.id}` }}
              />
            ));

            return (
              <li className="transaction-group">
                <h3>{date}</h3>
                {details}
              </li>
            );
          })}
        </TransactionList>
      </TransactionsWrapper>
    </Box>
  );
};

export default Transactions;

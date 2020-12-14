import React from "react";
import { useDisclosure, Box } from "@chakra-ui/core";
import transactions from "data/transactions";
import dayjs from "dayjs";

import Transaction from "components/Transaction";
import TransactionDetails from "components/TransactionDetails.js";
import Modal from "components/Modal";

import format from "data/format";
import { generateMetadata, generateLabel } from "utils/formatTransaction";
import { TransactionList, TransactionsWrapper, CardTitle } from "./styles";
import FilterMenuSelect from "components/FilterMenuSelect";

const Transactions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // state for to hold selected transaction to be rendered in transactions details modal
  const [current, setCurrent] = React.useState(null);

  // state for drop down filter
  const [selected, setSelected] = React.useState({
    label: "All",
    value: "all"
  });

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
          <CardTitle>
            <h2>Transactions</h2>
            {/* <FilterMenuSelect {...{ selected, setSelected }} /> */}
          </CardTitle>
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
              <li className="transaction-group" key={`transaction-${_.date}`}>
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

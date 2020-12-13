/* eslint-disable indent */
import React, { Fragment } from "react";
import { useDisclosure } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import Modal from "components/Modal";
import { generateMetadata, generateLabel } from "utils/formatTransaction";
import transactions from "data/transactions";

import Transaction from "components/Transaction";
import TransactionDetails from "components/TransactionDetails.js";
import NoContent from "components/NoContent.js";
import { InlineCardWrapper, CardTitle, TransactionList } from "./styles.js";

const LatestTransaction = () => {
  const [transformedTransactions, setTransformedTransactions] = React.useState([]);
  const [current, setCurrent] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [transactions] = useTransactions();

  React.useEffect(() => {
    appendImageAndMetadata();

    function appendImageAndMetadata() {
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

      <InlineCardWrapper>
        <CardTitle>
          <h3>Latest transaction</h3>
          <Link to="/transactions">
            <p className="active">View more</p>
          </Link>
        </CardTitle>
        <TransactionList>
          {transformedTransactions?.length > 0 ? (
            transformedTransactions.map(transaction => {
              return (
                <Transaction
                  {...{
                    transaction,
                    onOpen,
                    setCurrent,
                    key: `transaction-${transaction.id}`
                  }}
                />
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

export default LatestTransaction;

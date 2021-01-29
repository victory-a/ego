/* eslint-disable indent */
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useDisclosure } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { getTransactions } from "lib/transaction.js";
import { generateMetadata, generateLabel } from "utils/formatTransaction";

import Modal from "components/Modal";
import Transaction from "components/Transaction";
import TransactionDetails from "components/TransactionDetails.js";
import NoContent from "components/NoContent.js";
import { InlineCardWrapper, CardTitle, TransactionList } from "./styles.js";
import { LoadingSkeleton } from "components/Skeleton.js";

const LatestTransaction = () => {
  const [transformedTransactions, setTransformedTransactions] = React.useState([]);
  const [current, setCurrent] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, status } = useQuery("getTransactions", getTransactions);

  React.useEffect(() => {
    if (data?.length > 0) {
      appendImageAndMetadata();
    }

    function appendImageAndMetadata() {
      const transformed = data.splice(0, 3).map(transaction => {
        transaction.image = generateLabel(transaction);
        transaction.metadata = generateMetadata(transaction);
        return transaction;
      });
      return setTransformedTransactions(transformed);
    }
  }, [data]);

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
          {status === "loading" ? (
            <LoadingSkeleton />
          ) : transformedTransactions?.length > 0 ? (
            transformedTransactions.map(transaction => {
              return (
                <Transaction
                  {...{
                    transaction,
                    onOpen,
                    setCurrent,
                    key: `transaction-${transaction._id}`
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

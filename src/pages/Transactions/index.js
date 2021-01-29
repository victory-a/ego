import React from "react";
import { useQuery } from "react-query";
import { useDisclosure, Box } from "@chakra-ui/core";
import dayjs from "dayjs";

import { getTransactions } from "lib/transaction.js";
import Transaction from "components/Transaction";
import TransactionDetails from "components/TransactionDetails.js";
import Modal from "components/Modal";
import LoadingSkeleton from "components/Skeleton.js";
import NoContent from "components/NoContent.js";

import { appendImageAndMetadata, transformByDates } from "utils/formatTransaction";
import { TransactionList, TransactionsWrapper, CardTitle } from "./styles";
import FilterMenuSelect from "components/FilterMenuSelect";

const Transactions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, status } = useQuery("getTransactions", getTransactions);
  const [transactions, setTransactions] = React.useState([]);

  const [filteredTransactions, setFilteredTransactions] = React.useState(transactions);

  // state for to hold selected transaction to be rendered in transactions details modal
  const [current, setCurrent] = React.useState(null);

  // state for drop down filter
  const [selected, setSelected] = React.useState({
    label: "All",
    value: "all"
  });

  React.useEffect(() => {
    if (data?.length > 0) {
      setTransactions(data);
    }
  }, [data]);

  React.useEffect(() => {
    let filterResults;
    if (selected.value === "all") {
      filterResults = transactions;
    } else {
      filterResults = transactions.filter(transaction => transaction.category === selected.value);
    }

    setFilteredTransactions(filterResults);
  }, [selected, transactions]);

  const transformedTransactions = React.useMemo(
    () => appendImageAndMetadata(filteredTransactions),
    [filteredTransactions]
  );
  const refinedTransactions = React.useMemo(() => transformByDates(transformedTransactions), [
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
            <FilterMenuSelect {...{ selected, setSelected }} />
          </CardTitle>
          {status === "loading" ? (
            <LoadingSkeleton />
          ) : refinedTransactions?.length > 0 ? (
            refinedTransactions.map(_ => {
              const date =
                dayjs().format("DD MMMM, YYYY") === dayjs(_.date).format("DD MMMM, YYYY")
                  ? "Today"
                  : dayjs(_.date).format("DD MMMM, YYYY");

              const details = _.transactions.map(transaction => (
                <ul key={`transaction-${transaction._id}`}>
                  <Transaction {...{ transaction, onOpen, setCurrent }} />
                </ul>
              ));

              return (
                <li className="transaction-group" key={`transaction-${_.date}`}>
                  <h3>{date}</h3>
                  {details}
                </li>
              );
            })
          ) : (
            <NoContent caption="No transactions!" />
          )}
        </TransactionList>
      </TransactionsWrapper>
    </Box>
  );
};

export default Transactions;

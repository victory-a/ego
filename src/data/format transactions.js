const transactions = [
  { time: "2017-10-04T20:24:30+00:00", amount: 200, label: "food", type: "credit" },
  { time: "2017-11-04T20:24:30+00:00", amount: 200, label: "food", type: "credit" },
  { time: "2017-11-04T20:24:30+00:00", amount: 200, label: "food", type: "credit" },
  { time: "2017-11-04T20:24:30+00:00", amount: 200, label: "food", type: "debit" },
  { time: "2017-12-04T20:24:30+00:00", amount: 200, label: "food", type: "debit" },
  { time: "2017-12-04T20:24:30+00:00", amount: 200, label: "food", type: "debit" },
  { time: "2017-10-04T20:24:30+00:00", amount: 200, label: "food", type: "debit" }
];

function sortTransactions(transactions) {
  const updatedTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.time.split("T")[0];

    if (!acc[date]) acc[date] = [];
    acc[date].push(transaction);

    return acc;
  }, {});

  return Object.keys(updatedTransactions).map(date => {
    const transactions = updatedTransactions[date];
    const totalAmount = transactions.reduce((acc, { amount }) => acc + amount, 0);

    const inflow = transactions
      .filter(trans => trans.type === "credit")
      .reduce((acc, { amount }) => acc + amount, 0);

    const outflow = transactions
      .filter(trans => trans.type === "debit")
      .reduce((acc, { amount }) => acc + amount, 0);

    return {
      date,
      transactions,
      totalAmount,
      inflow,
      outflow
    };
  });
}

export default function sortTransactions(transactions) {
  const updatedTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.createdAt.split("T")[0];

    if (!acc[date]) acc[date] = [];
    acc[date].push(transaction);

    return acc;
  }, {});
  return Object.keys(updatedTransactions).map(date => {
    const transactions = updatedTransactions[date];

    return {
      date,
      transactions
    };
  });
}

// [
//   {
//     date: '2019-07-01',
//     transactions: [ [Object], [Object], [Object], [Object] ]
//   },
//   { date: '2019-10-01', transactions: [ [Object], [Object] ] },
//   { date: '2019-12-01', transactions: [ [Object], [Object] ] }
// ]

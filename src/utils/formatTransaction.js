import mtn from "assets/mtn.svg";
import nineMobile from "assets/9mobile.svg";
import glo from "assets/glo.svg";
import airtel from "assets/airtel.svg";
import receive from "assets/receive.svg";
import bankTransfer from "assets/banktransfer.svg";
import { phoneCountryCodeFormat } from "./formatNumber";

export function transformByDates(transactions) {
  const updatedTransactions = transactions.reduce((acc, transaction) => {
    // returns an object with the form { <date>: [transactions]}
    const date = transaction.createdAt.split("T")[0];

    if (!acc[date]) acc[date] = [];
    acc[date].push(transaction);

    return acc;
  }, {});

  return Object.keys(updatedTransactions).map(date => {
    // returns an array of objects with the form { date: "", transactions: []}
    const transactions = updatedTransactions[date];

    return {
      date,
      transactions
    };
  });
}

export const generateMetadata = transaction => {
  let title;
  let description;

  switch (transaction.type) {
    case "PHONE_TRANSFER":
      title = `+${phoneCountryCodeFormat(transaction.recipient.mobile)}`;
      description = transaction.category === "debit" ? "Send" : "Receive";
      break;

    case "UTILITY_BILL":
      title = "Utility Bill";
      description = transaction.category === "debit" ? "Send" : "Receive";
      break;

    case "VTU":
      title = `${transaction.recipient.subscriber} (+${phoneCountryCodeFormat(
        transaction.recipient.mobile
      )})`;
      description = "Airtime Purchase";
      break;

    default:
      title = `${transaction.recipient.accountName}`;
      description = "Bank Transfer";
      break;
  }

  return { title, description };
};

export const generateLabel = transaction => {
  let image = bankTransfer;

  if (transaction.type === "VTU" && transaction.recipient.subscriber === "9MOBILE") {
    image = nineMobile;
  } else if (transaction.type === "VTU" && transaction.recipient.subscriber === "MTN") {
    image = mtn;
  } else if (transaction.type === "VTU" && transaction?.recipient?.subscriber === "GLO") {
    image = glo;
  } else if (transaction.type === "VTU" && transaction?.recipient?.subscriber === "AIRTEL") {
    image = airtel;
  } else if (transaction.type === "PHONE_TRANSFER") {
    image = receive;
  } else {
    image = bankTransfer;
  }
  return image;
};

export function appendImageAndMetadata(transactions) {
  return transactions.map(transaction => {
    transaction.image = generateLabel(transaction);
    transaction.metadata = generateMetadata(transaction);
    return transaction;
  });
}

import mtn from "assets/mtn.svg";
import nineMobile from "assets/9mobile.svg";
import glo from "assets/glo.svg";
import airtel from "assets/airtel.svg";
import receive from "assets/receive.svg";
import bankTransfer from "assets/banktransfer.svg";

export const generateMetadata = transaction => {
  let title;
  let description;

  switch (transaction.type) {
    case "PHONE_TRANSFER":
      title = `+${transaction.recipient.mobile}`;
      description = transaction.category === "debit" ? "Send" : "Receive";
      break;

    case "VTU":
      title = `${transaction.recipient.subscriber} (+${transaction.recipient.mobile})`;
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

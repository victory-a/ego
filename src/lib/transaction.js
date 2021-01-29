import client from "./client";

function payBill(payload) {
  const response = client("pay/utility", { body: payload }).then(data => data.data);
  return response;
}

function buyAirtime(payload) {
  const response = client("pay/airtime", { body: payload }).then(data => data.data);
  return response;
}

function sendToBank(payload) {
  const response = client("pay/bank", {
    body: payload
  }).then(data => data.data);

  return response;
}

function sendToMobile(payload) {
  const response = client("pay/mobile", {
    body: payload
  }).then(data => data.data);

  return response;
}

function getTransactions() {
  const transactions = client("users/transactions")
    .then(data => data.data)
    .catch(err => err);
  return transactions;
}

function getBalance() {
  const transactions = client("users/balance")
    .then(data => data.data)
    .catch(err => err);
  return transactions;
}

export { payBill, getTransactions, getBalance, buyAirtime, sendToBank, sendToMobile };

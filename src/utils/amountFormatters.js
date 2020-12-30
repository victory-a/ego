import isEmpty from "lodash.isempty";

export function thousandFormat(x) {
  let formatted;

  if (!isEmpty(x) && x[0] === "0" && x.length === 1) {
    return (formatted = x);
  } else if (!isEmpty(x) && x[0] === "0") {
    formatted = x
      .toString()
      .replace(/^0/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    formatted = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formatted;
}

export function nairaFormat(number) {
  const value = Number(number).toFixed(2);
  const [naira, kobo] = value.split(".");

  return { naira: thousandFormat(naira), kobo: `.${kobo}` };
}

export function naira(number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  }).format(Number(number));
}

export const normalizeAmount = val => val.replace(/[^\d.]/g, "");

export const koboToNaira = val => parseInt(val / 100);

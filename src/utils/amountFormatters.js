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
// export const kFormatter = x => {
//   if (isNaN(x)) return x;

//   if (x < 9999) {
//     return x;
//   }

//   if (x < 1000000) {
//     return (x / 1000).toFixed(2) + "K";
//   }
//   if (x < 10000000) {
//     return (x / 1000000).toFixed(2) + "M";
//   }

//   if (x < 1000000000) {
//     return Math.round(x / 1000000).toFixed(2) + "M";
//   }

//   if (x < 1000000000000) {
//     return Math.round(x / 1000000000) + "B";
//   }

//   return "1T+";
// };

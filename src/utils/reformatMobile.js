export const reformatMobile = number => {
  let formatted;

  if (number) {
    const mobile = number.substring(0, 3);

    if (mobile === "234") {
      formatted = number.replace(/^234/, "0");
    } else {
      formatted = number;
    }
  }

  return formatted;
};

export const phoneCountryCodeFormat = number => {
  let formatted;

  if (number[0] === "0") {
    formatted = number.replace(/^0/, "234");
    return formatted;
  } else {
    formatted = `234${number}`;
    return formatted;
  }
};

export const normalizeMobile = number => number.replace(/-/gi, "");

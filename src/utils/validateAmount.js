export const validateAmountInput = e => {
  let t = e.target.value;

  // limit to 2dp for floats
  e.target.value =
    t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3) : t;

  const updates = e.target.value;
  // remove commas
  return updates ? updates.substring(1).replace(/,/g, "") : "";
};

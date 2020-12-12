const upperCase = word => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default upperCase;

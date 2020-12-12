import React from "react";
import { CardWrapperWithMargin, CardTitle } from "./styles.js";
import NoContent from "components/NoContent";

const QuickTransactions = () => {
  return (
    <CardWrapperWithMargin>
      <CardTitle>
        <h3>My Ego</h3>
        <p>Last 7 days</p>
      </CardTitle>
      <NoContent caption="No transactions!" />
    </CardWrapperWithMargin>
  );
};

export default QuickTransactions;

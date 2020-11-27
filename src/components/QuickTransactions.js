import React from "react";
import { CardWrapperWithMargin, CardTitle } from "./ContentCard";
import NoContent from "components/NoContent";

const QuickTransactions = () => {
  return (
    <CardWrapperWithMargin>
      <CardTitle>
        <h3>My Ego</h3>
        <label htmlFor="quick-transactions">Last 7 days</label>
      </CardTitle>
      <NoContent caption="No transactions!" />
    </CardWrapperWithMargin>
  );
};

export default QuickTransactions;

import React from "react";
import { InlineCardWrapper, CardTitle } from "./ContentCard";
import NoContent from "components/NoContent";

const QuickTransactions = () => {
  return (
    <InlineCardWrapper>
      <CardTitle>
        <h3>My Ego</h3>
        <label htmlFor="quick-transactions">Last 7 days</label>
      </CardTitle>
      <NoContent caption="No transactions!" />
    </InlineCardWrapper>
  );
};

export default QuickTransactions;

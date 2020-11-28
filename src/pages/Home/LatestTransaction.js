import React from "react";
import { InlineCardWrapper, CardTitle } from "./styles.js";

const LatestTransaction = () => {
  return (
    <InlineCardWrapper>
      <CardTitle>
        <h3>Latest transaction</h3>
        <p>View more</p>
      </CardTitle>
    </InlineCardWrapper>
  );
};

export default LatestTransaction;

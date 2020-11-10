import React from "react";
import { HomeWrapper } from "./styles";
import WelcomeDisplay from "components/WelcomeDisplay";

const user = {
  // name: "soks"
};
const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeDisplay userName={user.name} />
    </HomeWrapper>
  );
};

export default Home;

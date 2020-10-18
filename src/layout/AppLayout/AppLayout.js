import React from "react";
import { AppContainer, MainContentWrapper, TopNavContainer, BottomNavContainer } from "./styles";
import { TopNav } from "components/Navigation";

const pageDetailsContext = React.createContext();

const AppLayout = ({ children }) => {
  const { Provider } = pageDetailsContext;
  const [pageTitle, setPageTitle] = React.useState("");
  return (
    <Provider value={{ pageTitle, setPageTitle }}>
      <AppContainer>
        <TopNavContainer>
          <TopNav />
        </TopNavContainer>

        <MainContentWrapper>{children}</MainContentWrapper>

        <BottomNavContainer></BottomNavContainer>
      </AppContainer>
    </Provider>
  );
};

export default AppLayout;

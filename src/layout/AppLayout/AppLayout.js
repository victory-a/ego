import React from "react";
import { AppContainer, MainContentWrapper, TopNavContainer, BottomNavContainer } from "./styles";
import { TopNav, BottomNav } from "components/Navigation";
import { TabletScreen } from "layout/viewports";

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

        <TabletScreen>
          <BottomNavContainer>
            <BottomNav />
          </BottomNavContainer>
        </TabletScreen>
      </AppContainer>
    </Provider>
  );
};

export default AppLayout;

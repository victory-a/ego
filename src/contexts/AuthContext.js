import React from "react";
import { getStorage, setStorage, removeFromStorage } from "utils/storage";

const AuthContext = React.createContext();
// temporary auth context for development purposes
const AuthProvider = ({ children }) => {
  const { Provider } = AuthContext;

  const memorizedState = getStorage("user");
  const [user, setUser] = React.useState(memorizedState);

  const login = () => {
    const user = { name: "david" };
    setUser(user);
    setStorage("user", user);
  };

  const logout = () => {
    setUser(null);
    removeFromStorage("user");
  };

  return <Provider value={{ user, login, logout }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an Auth provider");
  }

  return context;
};

export default AuthProvider;

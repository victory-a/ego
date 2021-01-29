import React from "react";
import { useQuery, queryCache } from "react-query";
import { FullPageSpinner } from "components/loaders.js";
import { logout, getUser } from "lib/auth";

// checks for valid user details to determine what part of the app to render
async function bootstrapAppData() {
  const response = await getUser();

  if (response !== null) {
    return { user: response.data };
  }

  return Promise.resolve(null);
}

const AuthContext = React.createContext();
// temporary auth context for development purposes
const AuthProvider = props => {
  const { Provider } = AuthContext;
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);

  const { status } = useQuery({
    queryKey: "user",
    queryFn: bootstrapAppData,
    config: {
      onSettled: () => setFirstAttemptFinished(true),
      onSuccess: () => {
        queryCache.invalidateQueries("userDetails");
      }
    }
  });

  if (!firstAttemptFinished) {
    if (status === "loading") return <FullPageSpinner />;

    if (status === "error") {
      return (
        <div style={{ color: "red" }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
        </div>
      );
    }
  }

  async function handleLogout() {
    logout().then(() => (window.location.href = "/"));
    queryCache.clear();
  }

  return <Provider value={{ handleLogout }} {...props} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an Auth provider");
  }

  return context;
};

export default AuthProvider;

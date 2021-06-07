import React, { useEffect, lazy, Suspense } from "react";

import { FullPageSpinner } from "components/loaders.js";
import { useAuth } from "contexts/AuthContext";
import { checkTokenValidity, useUserDetails } from "lib/auth";

const loadAuthenticatedApp = () => import("app/authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);

const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  const { handleLogout } = useAuth();
  React.useLayoutEffect(() => {
    checkTokenValidity(handleLogout);
  }, [handleLogout]);

  const { user } = useUserDetails();

  // load authenticated app in bg while user completes auth form
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {/* {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
      <AuthenticatedApp />
    </Suspense>
  );
}

export default App;

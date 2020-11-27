import React, { useEffect, lazy, Suspense } from "react";
import { FullPageSpinner } from "components/loaders.js";
import { useAuth } from "contexts/AuthContext";
const loadAuthenticatedApp = () => import("app/authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);

const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  const { user } = useAuth();

  // load authenticated app in bg while user completes auth form
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;

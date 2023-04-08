import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase/firebase";


function ProtectedRoute({ component: Component, ...rest }) {
  const [user] = useAuthState(auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

export default ProtectedRoute;

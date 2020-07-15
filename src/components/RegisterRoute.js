import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function RegisterRoute({ children, ...rest }) {
    const user = React.useContext(AuthContext).data;
    console.log('wo:', user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuth ? (
            <Redirect
            to={{
              pathname: "/account",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
export default RegisterRoute

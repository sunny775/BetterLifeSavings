import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const LoadingOverlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AccountRoute({ children, ...rest }) {
  const { data, userDetails } = React.useContext(AuthContext);
  if (data && userDetails) {
    const { phoneNumber, isAuth } = data;

    return (
      <Route
        {...rest}
        render={({ location }) =>
          !isAuth ? (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location },
              }}
            />
          ) : userDetails.username ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: `/settings/${phoneNumber}/edit-profile`,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  } else {
    return (
      <LoadingOverlay>
        <Spinner animation="border" role="status" variant="dark">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </LoadingOverlay>
    );
  }
}

export default AccountRoute;

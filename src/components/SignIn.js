import React, { useContext } from "react";
import styled from "styled-components";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { uiConfig } from "../config/firebase";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const SignIn = styled.div`
  margin-top: 100px;
  background: white;
  padding-top: 60px;
  padding-bottom: 100px;
  text-align: center;
`;

function SignInModal() {
  const user = useContext(AuthContext);
  const history = useHistory();

  const { whenAuth, deviceToken } = user;

  return (
    <SignIn>
      <div style={{ margin: "20px 0" }}>
        <strong>Please sign-in</strong>
      </div>
      <StyledFirebaseAuth
        uiConfig={uiConfig(whenAuth, history, deviceToken)}
        firebaseAuth={firebase.auth()}
      />
    </SignIn>
  );
}
export default SignInModal;

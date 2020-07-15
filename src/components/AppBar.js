import React, { useContext } from "react";
import logo from "../images/logo.png";
import wallet from "../images/wallet.png";
import nigeriaFlag from "../images/nigeria_flag.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";

const buttons = {
  margin: 10,
};
const SignIn = styled(Button)`
color: white;
border-radius: 15px;
`
const Root = styled.div`
  padding: 0;
  margin: 0 10px;
  margin-top: 100px;
`;
const Contact = styled.div`
font-size: 15,
letter-spacing: 4,
`;
const Wallet = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  justify-content: right;
  alight-items: right;
  float: right;
  margin: 10px;
`;
const Div = styled.div`
  min-height: 100px;
  display: flex;
  background-image: url(${logo});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;


export const AppBar = () => {

  const { data, userDetails } = useContext(AuthContext);
   const {username} = userDetails
   const {phoneNumber} = data
  return (
    <Root className="row">
      <Div className="col-sm-4">
       
      </Div>
      <Contact className="col-sm-4">
      <img 
          src={nigeriaFlag} alt="Country flag" 
          style={{ borderRadius: "50%", maxWidth: "100px", maxHeight: "105px" }}
        />
      </Contact>
      <div className="col-sm-4">
        <Wallet>
          <img src={wallet} height="100%" alt="wallet" />
          {username? <Link to="/account" style={buttons}>
          <SignIn
            variant="outline-success"
            size="sm"
          >
            <strong>{username}</strong>
          </SignIn>
          </Link> : phoneNumber ? <Link to={`settings/${phoneNumber}/edit-profile`} style={buttons}>
          <SignIn
            variant="outline-success"
            size="sm"
          >
            <strong>{phoneNumber}</strong>
          </SignIn>
          </Link> : <Link to="/sign-in" style={buttons}>
          <SignIn
            variant="outline-success"
            size="sm"
          >
            sign in
          </SignIn>
          </Link>}
        </Wallet>
      </div>
    </Root>
  );
};

import React, { useContext } from "react";
import Form from "./form";
import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";

const Div = styled.div`
  background: white;
  height: fit-content;
  margin: 20px auto;
  padding: 5vmin;
  max-width: 740px;
  @media (min-width: 786px) {
    width: 80%;
  }
`;

const Section = styled.section`
  background: #388e3c;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2vmin;
  margin: 0;
`;

const Top = styled(Col)`
  text-align: left;
  color: white;
`;

const Register = () => {
  const {openLogin} = useContext(AuthContext);

  return (
    <Section className="row">
        <Row style={{maxWidth: '740px', margin:'auto'}}>
          <Top sm={12}>
            <h3>Registration Form</h3><br/>
            <p>
              Already registered ? Click{" "}
              <Button variant="info" size="sm" onClick={openLogin}>
                here
              </Button>{" "}
              to login.
            </p>
            <p>
              Upon registration, your phone will be used as your account number.
              Kindly ensure your use your official phone number for this
              registration
            </p>
            <p>
              If you do not have an email, you can{" "}
              <a href="https://mail.google.com">click here</a> or{" "}
              <a href="https://mail.yahoo.com">here</a> to create one. Email is
              required to ensure you to don't get locked out incase you forget
              your password.
            </p>
          </Top>
        </Row>
        <Div>
          <Form />
        </Div>
    </Section>
  );
};
export default Register;

import React, {useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button, Spinner,} from "react-bootstrap";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import { AuthContext } from '../../context/authContext';

const schema = yup.object({
  token: yup
    .string()
    .required("*Verification code is is required")
});

const Div = styled.div`
padding: 50px 30px;
margin: 50px auto;
background: rgba(0, 0, 0, 0.2)
`

function VerifyToken() {
  const user = useContext(AuthContext);
  console.log('user', user)

  const {loading, login, openVerifyToken, closeVerifyToken} = user;

  const Btn = loading ?  <Button variant="primary" disabled>
<Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
validating...
</Button> : <Button type='submit'  style={{float:'right'}}>request password reset</Button>

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => login(value)}
      initialValues={{
        token: "",
      }}
    >
      {({getFieldProps, touched, errors, handleSubmit}) => (
        <Div className='col-md-8'>
        <Form noValidate onSubmit={handleSubmit}>
      <Form.Group md="4" controlId="email_reset">
        <Form.Label>Enter your verification code</Form.Label>
        <Form.Control
          type="text"
          name="token"
          placeholder='Enter verification token'
          {...getFieldProps("token")}
          isValid={touched.token && !errors.token}
          isInvalid={touched.token && !!errors.token}
        />
        <Form.Control.Feedback type="invalid">
          {errors.token}
        </Form.Control.Feedback>
      </Form.Group>
          {Btn}
        </Form>
        </Div>
      )}
    </Formik>
  );
}
export default VerifyToken;

import React, {useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button, Spinner,} from "react-bootstrap";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import { AuthContext } from '../../context/authContext';

const schema = yup.object({
  email: yup
    .string()
    .email("*Enter a valid email address")
    .required("*Email is required")
});

const Div = styled.div`
padding: 50px 30px;
margin: 50px auto;
background: rgba(0, 0, 0, 0.2)
`

function Email() {
  const user = useContext(AuthContext);
  console.log('user', user)

  const {loading, login, showLogin, closeLogin} = user;

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
        email: "",
      }}
    >
      {({getFieldProps, touched, errors, handleSubmit}) => (
        <Div className='col-md-8'>
        <Form noValidate onSubmit={handleSubmit}>
      <Form.Group md="4" controlId="email_reset">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder='Enter your email'
          {...getFieldProps("email")}
          isValid={touched.email && !errors.email}
          isInvalid={touched.email && !!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
          {Btn}
        </Form>
        </Div>
      )}
    </Formik>
  );
}
export default Email;

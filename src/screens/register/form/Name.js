import React from "react";
import { Form } from "react-bootstrap";

export const Name = ({ formik }) => {
  const { getFieldProps, touched, errors } = formik;

  return (
    <>
      <Form.Group md="4" controlId="Formik01">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          placeholder='First Name'
          {...getFieldProps("firstname")}
          isValid={touched.firstname && !errors.firstname}
          isInvalid={touched.firstname && !!errors.firstname}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstname}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik02">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          placeholder='Last Name'
          {...getFieldProps("lastname")}
          isValid={touched.lastname && !errors.lastname}
          isInvalid={touched.lastname && !!errors.lastname}
        />
        <Form.Control.Feedback type="invalid">
          {errors.lastname}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

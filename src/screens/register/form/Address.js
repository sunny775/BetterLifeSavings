import React from "react";
import { Form } from "react-bootstrap";

export const Address = ({  formik }) => {
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik05">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          type="text"
          name="address1"
          placeholder="Address Line 1"
          {...getFieldProps("address1")}
          isValid={touched.address1 && !errors.address1}
          isInvalid={touched.address1 && !!errors.address1}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address1}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik06">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          type="text"
          name="address2"
          placeholder="Address Line 2"
          {...getFieldProps("address2")}
        />
      </Form.Group>
    </>
  );
};

import React from "react";
import { Form } from "react-bootstrap";
// import 'react-phone-number-input/style.css'
// import PhoneInput, { isValidPhoneNumber  } from 'react-phone-number-input';

export const EmailAndPhone = ({ formik }) => {
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik03">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder='Email'
          {...getFieldProps("email")}
          isValid={touched.email && !errors.email}
          isInvalid={touched.email && !!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      
     {/*<Form.Group md="4" controlId="Formik04">
        <Form.Label>Phone</Form.Label>
        <PhoneInput
          onBlur={formik.setFieldTouched}
          name="phone"
          country={'in'}
          value={formik.values.phone}
          defaultCountry="NG"
          error={formik.values.phone ? (isValidPhoneNumber(formik.values.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
          onChange={value => formik.setFieldValue('phone', value, true)}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>*/}
    </>
  );
};

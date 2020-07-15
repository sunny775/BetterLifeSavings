import React, { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { EmailAndPhone } from "./EmailAndPhone";
import { Name } from "./Name";
import { Address } from "./Address";
import { StateCityGenderBirth } from "./StateCity";
import { UsernameAndPassword } from "./UsernameAndPass";
import {SubmitBtn} from './SubmitBtn';
import { AuthContext } from "../../../context/authContext";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup.object({
  firstname: yup
    .string()
    .min(2, "*Name too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*First Name is required"),
  lastname: yup
    .string()
    .min(2, "*Name is too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*Last Name is required"),
  email: yup
    .string()
    .email("*Enter a valid email address"),
    // .required("*Email is required"),
  phone: yup
    .string()
    .min(11, "*Phone number is too short")
    .max(14, "*Phone number is too long")
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  address1: yup
    .string()
    .min(10, "*Address is too short")
    .required("*Address is required"),
  city: yup
    .string()
    .min(3, "*Too short")
    .max(30, "*City can't be longer than 30 characters")
    .required("*City is required"),
  state: yup
    .string()
    .min(3, "*Too short")
    .max(30, "*State can't be longer than 30 characters")
    .required("*State is required"),
  gender: yup.string().required("*Select gender"),
  dob: yup.string().required("*Select date of birth"),
  username: yup
    .string()
    .min(5, "*Username is too short")
    .required("*Username is required"),
  password: yup
    .string()
    .min(8, "*Password is too short")
    .required("*Password is required"),
  /*terms: yup.bool().required(),*/
});

function RegisterationForm() {
  const user = useContext(AuthContext);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => user.save(value)}
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        gender: "",
        dob: "",
        username: "",
        password: "",
      }}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Name formik={formik} />
          <EmailAndPhone formik={formik} />
          <Address formik={formik} />
          <StateCityGenderBirth formik={formik} />
          <UsernameAndPassword formik={formik} />
          <SubmitBtn />
        </Form>
      )}
    </Formik>
  );
}
export default RegisterationForm;

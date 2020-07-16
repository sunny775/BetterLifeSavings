import React, { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Spinner} from "react-bootstrap";
import styled from "styled-components";
import { Username } from "./Username";
import { EmailAndPhone } from "./EmailAndPhone";
import { Address } from "./Address";
import { StateCityGenderBirth } from "./StateCity";
import { Name } from "./FullName";
import { SubmitBtn } from "../../../components/SubmitBtn";
import { AuthContext } from "../../../context/authContext";

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
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup.object({
  displayName: yup
    .string()
    .min(6, "*Name is too short")
    .required("*Full Name is required"),
  username: yup
    .string()
    .min(5, "*Username is too short")
    .required("*Username is required"),
  email: yup.string().email("*Enter a valid email address"),
  phoneNumber: yup
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
  /*terms: yup.bool().required(),*/
});

function EditProfileForm() {
  const user = useContext(AuthContext);
  const { data, userDetails, detailLoading, updateDetails, newUser} = user;

  if ((data && newUser) || (data && userDetails.phoneNumber)) {
    const init = { ...data, ...userDetails };
    return (
      <Formik
        validationSchema={schema}
        onSubmit={(value) => updateDetails(value)}
        initialValues={{
          displayName: init.displayName || "",
          username: init.username || "",
          email: init.email || "",
          phoneNumber: init.phoneNumber || "",
          address1: init.address1 || "",
          address2: init.address2 || "",
          city: init.city || "",
          state: init.state || "",
          gender: init.gender || "",
          dob: init.dob || "",
        }}
      >
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Username formik={formik} />
            <Name formik={formik} />
            <EmailAndPhone formik={formik} />
            <Address formik={formik} />
            <StateCityGenderBirth formik={formik} />
            <SubmitBtn loading={detailLoading} text='save' />
          </Form>
        )}
      </Formik>
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
export default EditProfileForm;

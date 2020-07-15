import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const styles = {
  root: {
    position: "relative",
  },
  control: {
    border: "none",
  },
};
const Icon = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  cursor: pointer;
  padding: 7px;
  background: transparent;
  @media (max-width: 400px) {
    display: none;
  }
`;
export const Username = ({ formik }) => {
  const input = React.useRef();
  const focusInput = () => input.current.focus();
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik11" style={styles.root}>
        <Form.Label srOnly>Username</Form.Label>
        <Form.Control
          style={styles.control}
          ref={input}
          type="text"
          name="username"
          placeholder="username"
          {...getFieldProps("username")}
          isValid={touched.username && !errors.username}
          isInvalid={touched.username && !!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
        <Icon onClick={focusInput}>
          <FontAwesomeIcon icon="pencil-alt" color="grey" />
        </Icon>
      </Form.Group>
    </>
  );
};
Username.propTypes = {
  formik: PropTypes.object,
};

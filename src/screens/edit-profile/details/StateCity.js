import React from "react";
import { Form, Col, Row } from "react-bootstrap";
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
export const StateCityGenderBirth = ({ formik }) => {
  const cityInput = React.useRef();
  const stateInput = React.useRef();
  const focusCity = () => cityInput.current.focus();
  const focusState = () => stateInput.current.focus();
  const { getFieldProps, touched, errors, setFieldValue, values } = formik;
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} controlId="Formik07">
          <Form.Label srOnly>City</Form.Label>
          <Form.Control
            style={styles.control}
            ref={cityInput}
            type="text"
            name="city"
            placeholder="City"
            {...getFieldProps("city")}
            isValid={touched.city && !errors.city}
            isInvalid={touched.city && !!errors.city}
          />
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
          <Icon onClick={focusCity}>
            <FontAwesomeIcon icon="pencil-alt" color="grey" />
          </Icon>
        </Form.Group>
        <Form.Group as={Col} controlId="Formik08">
          <Form.Label srOnly>State</Form.Label>
          <Form.Control
            style={styles.control}
            ref={stateInput}
            type="text"
            name="state"
            placeholder="State"
            {...getFieldProps("state")}
            isValid={touched.state && !errors.state}
            isInvalid={touched.state && !!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
          <Icon onClick={focusState}>
            <FontAwesomeIcon icon="pencil-alt" color="grey" />
          </Icon>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Col sm={6}>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={6}>
                Gender
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  style={{ textAlign: "left" }}
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={() => setFieldValue("gender", "female")}
                />
                <Form.Check
                  style={{ textAlign: "left" }}
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={() => setFieldValue("gender", "male")}
                />
              </Col>
              <div
                style={{
                  margin: "5px auto",
                  color: "#d84315",
                  fontSize: "13px",
                }}
              >
                {touched.gender && !!errors.gender ? errors.gender : ""}
              </div>
            </Form.Group>
          </fieldset>
        </Col>
        <Form.Group as={Col} controlId="Formik10" sm={6}>
          <Form.Label srOnly>Date Of Birth</Form.Label>
          <Form.Control
            style={styles.control}
            type="date"
            name="dob"
            {...getFieldProps("dob")}
            isValid={touched.dob && !errors.dob}
            isInvalid={touched.dob && !!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
    </>
  );
};
StateCityGenderBirth.propTypes = {
  formik: PropTypes.object,
};

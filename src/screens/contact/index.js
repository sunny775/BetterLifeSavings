import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

export default  () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  return (
    <ContactWrapper>
    <h3>Get In Touch</h3>
      <Formik
        initialValues={{ fullName: '', subject: '', email: '', message: '' }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Your full name is required'),
            email: Yup.string()
              .email('Invalid email address'),
            mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                .required('Message is required'),
          subject: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Subject is required'),
          message: Yup.string()
            .required('Message is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col sm="4">
                <Form.Label htmlFor="fullName">Full Name</Form.Label>
              </Col>
              <Col sm="8">
              <Form.Group controlId="name">
                <Form.Control type="text" {...formik.getFieldProps('fullName')} placeholder="Full Name"  />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-danger">{formik.errors.fullName}</div>
                ) : null}
              </Form.Group>
              </Col>
            </Row>
            <Row>
                <Col sm="4">
                  <Form.Label htmlFor="email">Email Address</Form.Label>
                </Col>
                <Col sm="8">
                  <Form.Group controlId="email">
                    <Form.Control type="email" {...formik.getFieldProps('email')} placeholder="Enter your email" />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                  <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
                </Col>
                <Col sm="8">
                  <Form.Group controlId="contactform">
                    <Form.Control type="mobile" {...formik.getFieldProps('mobile')} placeholder="Enter your mobile" />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="text-danger">{formik.errors.mobile}</div>
                    ) : null}
                  </Form.Group>
                </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Form.Label htmlFor="subject">Subject</Form.Label>
              </Col>
              <Col sm="8">
                <Form.Group controlId="subject">
                  <Form.Control type="text" {...formik.getFieldProps('subject')} placeholder="Subject" />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="text-danger">
                    {formik.errors.subject}
                  </div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="4">
              <Form.Label  htmlFor="message">Message</Form.Label>
              </Col>
              <Col sm="8">
                <Form.Group controlId="message">
                  <Form.Control as="textarea"  {...formik.getFieldProps('message')} placeholder="Write message here" />
                  {formik.touched.message && formik.errors.message ? (
                    <div type="invalid"  className="text-danger">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
              <button type="submit" className="btn btn-primary">Submit</button>
            
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  max-width: 45rem;
  margin: 120px auto;
  margin-top: 150px;
  background: white;
  padding: 1rem 0.7rem;
  
`;
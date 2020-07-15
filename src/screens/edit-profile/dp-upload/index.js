import React, { useContext } from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { Form, Image, Modal } from "react-bootstrap";
import CustomImageInput from "./CustomImageInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../../context/authContext";
import { SubmitBtn } from "../../../components/SubmitBtn";

const FILE_SIZE = 5000 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const schema = yup.object({
  file: yup
    .mixed()
    .required('Select a new image to update profile photo')
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      "File too large. Max 5MB",
      (value) => value && value.size <= FILE_SIZE
    ),
});

const FileUpload = () => {
  const user = useContext(AuthContext);
  const { file, imagePreviewUrl, showPreview, hidePreview, dpLoading, uploadDp } = user;

  function showPreloadImage(errors) {
    let comp = null;

    if (errors["file"]) {
      comp = <FontAwesomeIcon icon="exclamation-triangle" />;
    } else if (file) {
      comp = (
        <Image
          src={imagePreviewUrl}
          alt="profile picture"
          thumbnail
          width="100%"
        />
      );
    } else {
      comp = (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <FontAwesomeIcon icon="camera" color="white" size="2x" />
        </div>
      );
    }
    return comp;
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => uploadDp(value.file)}
      initialValues={{
        file,
      }}
    >
      {({ errors, touched, handleBlur, setFieldValue, handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Field
            name="file"
            component={CustomImageInput}
            title="Change profile photo"
            setFieldValue={setFieldValue}
            errorMessage={errors["file"]}
            touched={touched["file"]}
            onBlur={handleBlur}
            user={user}
          />
          <Modal show={showPreview} centered onHide={() => hidePreview()}>
            <Modal.Header closeButton>Preview</Modal.Header>
            <Modal.Body>
              <div>{showPreloadImage(errors)}</div>
            </Modal.Body>
          </Modal>
          <SubmitBtn loading={dpLoading} text='save' />
        </Form>
      )}
    </Formik>
  );
};
export default FileUpload;

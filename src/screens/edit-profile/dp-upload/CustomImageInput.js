import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";
import Compressor from "compressorjs";

const Div = styled.div`
  border-adius: 50%;
  cursor: ${(props) => props.cursor};
  border: none;
  text-align: center;
  background: #eee;
  width: 100%;
  margin: 20px auto;
  padding: 10px;
`;

function CustomImageInput({ field, setFieldValue, errorMessage, title, user }) {
  const fileUpload = useRef();
  const {
    file,
    userDetails,
    imagePreviewUrl,
    dpLoading,
    selectUserPhoto,
  } = user;
  const { name, value } = field;
  const { url } = userDetails;

  function showFileUpload() {
    if (fileUpload && !dpLoading) {
      fileUpload.current.click();
    }
  }

  function handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      new Compressor(file, {
        quality: 0.8,
        maxWidth: 400,
        success(result) {
          reader.onloadend = () => {
            selectUserPhoto({
              file: result,
              imagePreviewUrl: reader.result,
            });
          };
          reader.readAsDataURL(result);
          setFieldValue(name, result);
        },
        error(err) {
          console.log(err.message);
        },
      });
    }
  }

  function showPreloadImage() {
    let comp = null;

    if (errorMessage) {
      comp = (
        <div>
          <FontAwesomeIcon icon="exclamation-triangle" />
          <small style={{ margin: "auto", color: "grey" }}>{title}</small>
        </div>
      );
    } else if (file) {
      comp = (
        <div>
          <Image
            src={imagePreviewUrl}
            alt="profile picture"
            width={120}
            thumbnail
          />
          ;
        </div>
      );
    } else if (url) {
      comp = (
        <div>
          <Image src={url} width={120} roundedCircle />
        </div>
      );
    } else {
      comp = (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <div>
            <FontAwesomeIcon icon="camera" color="white" size="2x" />
          </div>
          <small style={{ margin: "auto", color: "grey" }}>{title}</small>
        </div>
      );
    }
    return comp;
  }

  return (
    <Div onClick={showFileUpload} cursor={user.isLoading ? "wait" : "pointer"}>
      <input
        style={{ display: "none" }}
        id={name}
        name={name}
        type="file"
        onChange={handleImageChange}
        ref={fileUpload}
      />
      {showPreloadImage()}

      {errorMessage ? <span>{errorMessage}</span> : null}
    </Div>
  );
}

CustomImageInput.propTypes = {
  errorMessage: PropTypes.string,
  title: PropTypes.string,
  field: PropTypes.object,
  setFieldValue: PropTypes.func,
  selectUserPhoto: PropTypes.func,
  user: PropTypes.object,
};
export default CustomImageInput;

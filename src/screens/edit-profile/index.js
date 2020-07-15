import React from "react";
import Form from "./details";
import FileUpload from './dp-upload'
import styled from "styled-components"

const Div = styled.div`
  height: fit-content;
  margin: 20px auto;
  padding: 50px 5vmin;
  max-width: 640px;
  background: white;
  @media (min-width: 786px) {
    width: 80%;
  }
`;

const Section = styled.section`
  overflow: hidden;
  box-sizing: border-box;
  padding: 2vmin;
  margin: 0;
`;


const EditProfile = () => {

  return (
    <Section>
      <h1>Edit Profile Details</h1>
      <Div>
        <FileUpload />
      </Div>
        <Div>
          <Form />
        </Div>
    </Section>
  );
};
export default EditProfile;

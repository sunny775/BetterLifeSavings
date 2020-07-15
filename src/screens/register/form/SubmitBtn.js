import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../context/authContext";

const styles = {
  float: "right",
};
export function SubmitBtn({ step, disabled, next }) {
  const { loading } = useContext(AuthContext);
  
  return loading ? (
    <Button variant="primary" disabled style={styles}>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  ) : (
    <Button type="submit" style={styles}>
      Register
    </Button>
  );
}

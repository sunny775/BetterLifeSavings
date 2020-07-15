import React from "react";
import { Button, Spinner } from "react-bootstrap";
import PropTypes from 'prop-types'

const styles = {
  float: "right"
};
export function SubmitBtn({loading, text}) {

  
  return loading ? (
    <Button variant="secondary" disabled style={styles}>
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
    <Button type="submit" variant='success' style={styles}>
      {text}
    </Button>
  );
}
SubmitBtn.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const IsRegistered = () => (
    <div>

    <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Is BetterLifesavings a registered bank?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Yes, we are licensed by the Central Bank of Nigeria. Our registration number is * ***</Card.Body>
    </Accordion.Collapse>
    </Card>
    </div>
);
export default IsRegistered;

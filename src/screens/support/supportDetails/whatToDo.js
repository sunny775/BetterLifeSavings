import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const WhatToDo = () => (
    <div>

    <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      What do I need to use BetterLifesavings?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
          To use BetterLifesavings and sign up for any of our savings plan, you must be a citizen of a particular country and own a mobile phone and a phone number installed.
      </Card.Body>
    </Accordion.Collapse>
    </Card>
    </div>
);

export default WhatToDo;

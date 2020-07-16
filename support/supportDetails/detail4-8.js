import React from 'react';
import { Accordion, Card, Button} from 'react-bootstrap';

const Details4to8 = () => (
    <>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="3">
            How do I sign up?
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body>
        Go to our website betterlifesavings.com and click on register button and follow the prompts
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        Is my money save with BetterLifesavings?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
        Yes, your money is very safe with us. We secure all accounts with the same high-security encryption the best banks in the world.
        For extra protection, we insure every deposit you make into you BetterLifesavings account. If all banks are wiped out by a natural disaster or something, the Deposit Insurance Fund of the National Deposit Insurance Commission (NDIC) is required to pay you a certain amount of money as compensation.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        What fees do BetterLifesavings charge?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
        We’ll charge you according to you savings rate once in a month for all savings plan. if you sign up with your real details as required on the form page, you’ll get a basic account limited to a maximum balance of a certain amount, a maximum deposit of a certain amount at a time and a maximum transfer of a certain amount at a time. But if you add your Bank Verification Number (BVN) and a valid government-issued ID ( like your drivers license, national ID card or international passport) to your BetterLifesavings profile, your account will be upgraded to a full account without those limits.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
        Is there a minimum balance?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
        You either pay cash to a BetterLifesavings agent or make transfer from any Nigerian bank with a bank app or through internet banking.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="7">
       How do I make withdrawal? 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="7">
      <Card.Body>
      Upon a successful registration and BVN and ID card verification, you’ll be given a BetterLifesavings debit card. Which can be used anywhere in the country.      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="8">
      We’ll deliver your BetterLifesavings card to you anywhere in country. 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="8">
      <Card.Body>
      We’ll deliver your BetterLifesavings card to you anywhere in country.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="9">
        Do you give loans?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="9">
      <Card.Body>
        No, we don’t give loans yet.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="10">
      Will I get trans alerts?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="10">
      <Card.Body>
        Yes we’ll send you details of every transactions you make with your BetterLifesavings account daily by sms.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="11">
      What makes BetterLifesavings different from its competitors?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="11">
      <Card.Body>
        Because one thing is certain, your money is always save.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="12">
      Will I get account statements?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="12">
      <Card.Body>
      Yes, we’ll send you stamped monthly and annual account statements by email.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="13">
        Where’s your office?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="13">
      <Card.Body>
      We don’t have an office yet. However, we do have a residence and it’s located at 6, omokudu ajayi street. Okuneye estate. Egbe. Lagos, Nigeria. (We do not welcome our customers at our residence)
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="14">
        How do I contact BetterLifesavings?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="14">
      <Card.Body>
        Our contact details is on the lower left side of our webpage footer.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
    </>
);

export default Details4to8;

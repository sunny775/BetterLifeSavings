import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const UpgradeAccount = () => (
    <UpgradeDiv>
      <h3>Upgrade Your Account</h3>
      <p>How to remove limits from your BetterLifesavings account.</p>
      <p>
        - A basic BetterLifesavings account is limited to a maximum balance of a certain amount, a maximum deposit of a certain amount at a time and a maximum transfer of a certain amount at a time.
      </p>
      <p>
        To remove these limits: 
      </p>
      <ol>
          <li>Sign in to BetterLifesavings</li>
          <li>Tap Upgrade Account. </li>
          <li>Tap BVN and type in your Bank Verification Number.</li>
          <li>Tap ID image, choose the kind of ID you have and upload a photo of the ID.</li>
          <li>Tap ID number and type in your identification number.</li>
      </ol>
      <p>We usually upgrade accounts in minutes.</p>
    </UpgradeDiv>
);
export default UpgradeAccount;

const UpgradeDiv = styled.div`
  color: #FFF;
`;
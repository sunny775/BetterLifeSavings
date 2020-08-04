import React from 'react';
import styled from 'styled-components';
import { Accordion, Row, Col } from 'react-bootstrap';
import UpgradeAccount from './upgrade-account'
import Detail4to14 from './detail4-8';
import IsRegistered from './isRegistered';
import WhatToDo from './whatToDo';

const SupportDetails = () => (
    <>
        <SectionA>
            <HeadingWrapper>
                <MainHeading>Support</MainHeading>
            </HeadingWrapper>
        </SectionA>
        <Rowstyles>
        <H2>Questions People Ask Us Often</H2>
        <Row>
            <Col md="4">
              <UpgradeAccount />
            </Col>
            <Col md="8">
              <Accordion defaultActiveKey="0">
                <IsRegistered />
                <WhatToDo />
                <Detail4to14 />
              </Accordion>
            </Col>
        </Row>                
        </Rowstyles>
    </>
);

export default SupportDetails;

const Rowstyles = styled.div`
 text-align: left;
  padding: 5%;
`;


const HeadingWrapper = styled.div`
    // background-color: White;
    padding: 5%;
    color: black;
    font=weight: bold;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    margin: 0 5%;
`;
const SectionA = styled.section`
    margin-bottom: 5%;
    margin-top: 4rem;
`;
const MainHeading = styled.h1`
    verticalHeight: middle;
    text-align: center;
    color: #fff;
`;
const H2 = styled.h2`
  text-align: center;
  padding-bottom: 4%;
  color: #fff;
`;
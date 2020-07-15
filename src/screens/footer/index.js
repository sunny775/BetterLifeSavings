import React from 'react';
import styled from 'styled-components';
import footerBG from '../../images/cloud1.png';
import FooterContent from './FooterContent';


const Footer = () => (
    <div>
        <FooterContainer>
        <FooterContent /> 
        </FooterContainer>
        <br />
        <div style={{color: '#fff'}}>
        Copyright &copy;2020 BetterLifesavings Int’l. All rights Reserved.
        </div>
    </div>
);

export default Footer;

const FooterContainer = styled.div`
    color: #fff;
    background: transparent;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${footerBG}) right bottom no-repeat;
    margin-top: 1rem;
    padding: 2rem;
`;

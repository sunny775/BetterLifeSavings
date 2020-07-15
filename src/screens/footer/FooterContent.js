import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled.div`
display:flex;
justify-content:space-between;
padding:0 20px;
margin-top: 2rem;
`;

const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const LI = styled.li`
    margin: 2px 0;
    padding: 4% 0;
`;

const FooterContent = () => (
    <>
      <Row>
        <Col md="4" style={{textAlign: 'left'}}>
        <h4>Get In Touch</h4>
          <UL style={{listStyle: 'none'}}>
            <LI>
            <a href="tel:+2348055018140">+2348055018140</a>
            <LI>
            </LI>
            <FontAwesomeIcon icon='envelope' size='1x' color='#fff' style={{ marginRight: '2px'}}/>
            <a href="mailto:betterlifesavings2020@gmail.com" title='email us' style={{color: '#fff'}} >
                betterlifesavings2020@gmail.com
            </a>
            </LI>
            <LI>
                6, Omokudu Ajayi Street, Okuneye Estate, Egbe. Lagos Nigeria.
            </LI>
        </UL>
        </Col>
        <Col>
          <h4>Quick Links</h4>
          <div> <a href="/">Home</a> </div>
          <div><a href="/#about">About Us</a></div>
          <div><a href="/#register">Register</a></div>
          <div> <a href="/#blog">Blog</a> </div>
          <div> <Link to="/privacy-policy">Privacy Policy</Link> </div>
        </Col>
        <Col>
          <h4>Follow us on </h4>
          <Icon style={{width: '60%', margin: '1rem auto'}}>
          <a href="https://chat.whatsapp.com/J6HglRuoLVX8KzGEhAnnPh" title='whatsapp'>
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
          </a>
           {/* <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/> */}
          
          <a href="https://web.facebook.com/better.lifesavings" title='facebook'>
          <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
          </a>
          <a href="https://www.instagram.com/BetterLifesavings/" title='instagram'>
          <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
          </a>
          </Icon>
        </Col>
      </Row>
    </>
);

export default FooterContent;

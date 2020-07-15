import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from "react-bootstrap";
import Img from "../../images/sky.jpg";

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Footer = styled.footer`
  margin: 0;
  background-color: #34883a !important;
  position: relative;
  background-color: #2e7d32;
  background-image: url(${Img});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .card {
    margin-bottom: 20px;
    border-radius: 0;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
  }

  .footer-cards {
    margin: auto !important;
    width: fit-content;
  }
  .footer-cards .card {
    border: none !important;
    background: black;
    margin: 0 !important;
    padding: 0 1px;
  }
  .footer-cards .card-body {
    background-color: #2e7d32;
    opacity: 0.9 !important;
  }
  .footer-cards .card:first-child {
    padding-left: 0;
  }
  .footer-cards .card:last-child {
    padding-right: 0;
  }

  .copyright {
    text-align: center;
    margin-top: 50px;
    color: white;
    padding-bottom: 40px;
  }
  @media (max-width: 767px) {
    .footer-cards .card {
      background: none;
    }
  }
`;
const H4 = styled.h4`
  font-size: 1em;
  margin: 20px 0px;
`;
const NavLink = styled(Link)`
  text-decoration: none !important;
  color: white;
  :hover {
    color: white;
  }
`;
const A = styled.a`
  background: rgba(255, 255, 255, 0.8);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubForm = styled(Form)`
  text-align: left;
  color: white;
  margin-top: 30px;
`;
const Overlay = styled.div`
padding: 0 2vw !important;
padding-bottom: 7vw;
background-color: #2e7d32;
opacity: 0.8;
position: static;
top: 0;
right: 0;
bottom: 0;
left: 0;
`

export default () => {
  return (
    <Footer>
      <Overlay>
      <div className="row footer-cards">
        <div className="card text-white col-md-4">
          <div className="card-body">
            <h4 className="display-6">BETTER LIFE SAVINGS</h4>
            <H4 className="display-4">
              6, Omokudu Ajayi Street, Okuneye Estate, Egbe. Lagos Nigeria.
            </H4>
            <H4 className="display-4">Telephone +2348055018140</H4>
            <H4 className="display-4">
              e-mail: betterlifesavings2020@gmail.com
            </H4>
          </div>
        </div>
        <div className="card text-white col-md-4">
          <div className="card-body">
            <h4 className="display-6">QUICK LINKS</h4>
            <H4 className="display-4">
              <NavLink to="/">Home</NavLink>
            </H4>
            <H4 className="display-4">
              <NavLink to="/about">About Us</NavLink>
            </H4>
            <H4 className="display-4">
              <NavLink to="/sign-in">Join</NavLink>
            </H4>
            <H4 className="display-4">
              <NavLink to="/blog">Blog</NavLink>
            </H4>
            <H4 className="display-4">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </H4>
          </div>
        </div>
        <div className="card text-white col-md-4">
          <div className="card-body">
            <h4 className="display-6">FOLLOW US</h4>
            <Icon>
              <A
                href="https://chat.whatsapp.com/J6HglRuoLVX8KzGEhAnnPh"
                title="whatsapp"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  size="2x"
                  color="#00e676"
                />
              </A>
              <A
                href="https://www.facebook.com/FehintolaMrJerry/"
                title="facebook"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="2x"
                  color="#0091ea"
                />
              </A>
              <A
                href="https://www.instagram.com/BetterLifesavings/"
                title="instagram"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  color="#ff4081"
                />
              </A>
              <A href="mailto:betterlifesavings2020@gmail.com" title="email us">
                <FontAwesomeIcon icon="envelope" size="2x" color="#00b0ff" />
              </A>
            </Icon>
            <SubForm>
              <Form.Group controlId="formBasicEmail">
                <Form.Label srOnly>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text>
                  Sign up to our newsletter for the latest news and special
                  offers.
                </Form.Text>
              </Form.Group>

              <Button
                variant="info"
                type="submit"
                size="sm"
                style={{ float: "right" }}
              >
                Subscribe
              </Button>
            </SubForm>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © {new Date().getFullYear()} Betterlife Savings Int'l, all rights
          reserved
        </p>
      </div>
      </Overlay>
    </Footer>
  );
};

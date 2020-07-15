import React from "react";
import { Nav } from "react-bootstrap";
import { NavItem } from "./NavItem";
import styled from "styled-components";

export const TopNav = () => (
  <Wrapper>
    <Nav className="justify-content-center" activeKey="/home">
      <NavItem to="/" text="Home" />
      <NavItem to="/about" text="About Us" />
      <NavItem to="/contact" text="Contact" />
      <NavItem to="/blog" text="Blog" />
      <NavItem to="/account" text="My Account" />
    </Nav>
  </Wrapper>
);

const Wrapper = styled.div`
  background: #2e7d32;
  margin: 10px 0;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-top: none;
`;

import React from "react";
import styled from "styled-components";

export const NavItem = ({ children}) => <Div>{children}</Div>;
const Div = styled.div`
  float: left;
  text-align: center;
  padding: calc(6px + 2.2vmin);
  height: 100% !important;
  text-decoration: none;
  font-size: calc(6px + 1.6vmin);
  @media(max-width: 900px){
    display: none;
  }
`;

//{ display: flex;
// align-items: center;}
//font-size: 18px;
// padding: 20px;

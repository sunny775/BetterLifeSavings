import React from "react";
import styled from "styled-components";
import {SearchBar} from './Search'
import {IconCard} from './IconCard'
import {Subscribe} from './Subscribe'
import TopStories from './topstories'

const Div = styled.div`
  margin: 0;
  background:#388e3c;
  overflow: hidden;
`;
// const x = rgba(255, 255, 255, 0.5);

const SideBar = () => (
  <Div className="col-md-3">
    <SearchBar />
    <IconCard />
    <Subscribe />
    <TopStories />
  </Div>
);
export default SideBar;

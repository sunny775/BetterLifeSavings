import React from 'react'
import styled from "styled-components";
import Img from '../../../images/Nestle.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap'

const StoryImg = styled.div`
.left{
    position:absolute;
    left:5px;
    top:5px;
};
.right{
    position:absolute;
    right:5px;
    top:5px;
}
position:relative;
min-height:30vh;
color:white;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-image:url(${Img});
background-size:cover;
background-position:center;
`
const Div = styled.div`
padding:20px 0;
border-bottom:3px dashed #eee;
`
export const Story = () =>(
    <Div>
        <StoryImg>
        <p>GTBank, Zenith Bank, Nestle emerge Renaissance Capital’s top stock picks</p>
        <div className='right'>
        <FontAwesomeIcon icon='share-alt' size='lg' color='#00b0ff'/>
        </div>
        <div className='left'>
        <FontAwesomeIcon icon='ellipsis-v' size='lg' color='#00b0ff'/>
        </div>
        <Button variant="info" size="sm">Read</Button>
        </StoryImg>
        
    </Div>
)
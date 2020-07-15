import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Profile = (props) => {
    const {name, title, profile_pic, whatsapp, facebook, instagram,phoneNumbers, phoneNumber2 } = props.team;
    return (
        <PlanCard>
            <Card.Img src={profile_pic} alt={name} />
            <CardBody>
                <Card.Title>{name}</Card.Title>
                <p>{title}</p>
                <p>
                    {phoneNumber2 ? <a style={{color: '#fff', marginRight: '4px'}} href={`tel:${phoneNumber2}`}>
                      {phoneNumber2}
                    </a> : null}
                    <a style={{color: '#fff', marginRight: '4px'}} href={`tel:${phoneNumbers}`}>
                    {phoneNumbers}
                    </a>
                </p>
                <Icons className="mt-4">
                <a href={whatsapp}>
                <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
                </a>
                   <a href={facebook}>
                    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
                   </a> 
                   {instagram ? <a href={instagram}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
                   </a> : null}
                </Icons>
            </CardBody>
        </PlanCard>
    );
}


const PlanCard = styled(Card)`
    box-shadow: 0px 4px 6px black;
    width: 30%;
    margin: 0 auto;
    @media(max-width: 700px) {
        width: 50% !important;
        margin: 1.3rem auto;
    }
`
const CardBody = styled(Card.Body)`
    background: green;
    color: #fff;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
`;


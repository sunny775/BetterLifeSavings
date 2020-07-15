import React from 'react';
import styled from 'styled-components';
import { Profile } from './Profile';
import { teamsInfo } from './team-info';

const Team = () => {
    return (
        <ProfileWrapper>
        {
            teamsInfo.map((team, i) => (
                    <Profile key={i} team={team} />
            ) )
        }
        
        </ProfileWrapper>
    )
};

export default Team;


const ProfileWrapper = styled.div`
    display: flex;
    justifyContent: space-around;
    color: green;
    margin: 0 auto;
    @media(max-width:700px) {
        display: block;
    }
`;
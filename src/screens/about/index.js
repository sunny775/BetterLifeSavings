import React from 'react';
import styled from 'styled-components';
import Team from './aboutDetails/Team';

const About = () => (
    <Wrapper>
        <SectionA>
            <HeadingWrapper>
                <MainHeading>About Us</MainHeading>
            </HeadingWrapper>
        </SectionA>
        <SectionA>
            <h3>A Brief History About Us</h3>
            <AboutContainer>
                <p>
                Hi there, this is BetterLifesavings Int’l. 
                What we do is help you save your money 
                (daily, weekly, monthly and yearly) for a BetterLife.
                Founded in year 1996, under the name; Fehintola General Agencies, 
                by Adekoya Adedeji Williams (aka baba alajo), BetterLifesavings has 
                come a long way from its beginning in Egbe-Agodo, Lagos, Nigeria.
                </p>
                <p>
                 When Adekoya Adedeji Williams first started out his passion for helping
                 people save for the future, after so many attempts of securing a day job 
                 and not been able to (Destiny Speaks). We now serve our customers all over 
                 the town and are thrilled to turn our passion into an online thing, so we 
                 can continue to serve you even much better.
                </p>
                <p>
                We hope you enjoy our services just as much as we enjoy giving them to you and 
                if you have any questions whatsoever, please do not hesitate to contact us.
                Sincerely,
                </p>
            </AboutContainer>
        </SectionA>
            <h2>Meet Our Team</h2>
            <Team />
        <SectionA>
        </SectionA>
    </Wrapper>
)
export default About;

const MainHeading = styled.h1`
    verticalHeight: middle;
    text-align: center
`;
const HeadingWrapper = styled.div`
    background-color: White;
    padding: 5%;
    color: black;
    font=weight: bold;
    border-bottom: 2px solid green;
    border-top: 2px solid green;
    margin: 0 5%;
`;
const SectionA = styled.section`
    margin-bottom: 5%;
`;

const AboutContainer = styled.div`
    margin: 0 auto;
    max-width: 45rem;
    text-align: left
`;
const Wrapper = styled.div`
background: white;
margin-top: 100px;
padding: 50px 0;
`
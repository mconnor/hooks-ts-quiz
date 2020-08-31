import React from 'react'
import styled from 'styled-components'
import globalStyles from '../App.module.css'

type Props = {
    devName: string;
    email: string;
}

const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
`;

const Button = styled.div`
    margin-right: 20px; 
`;




const Footer = ({ devName, email }: Props) => {
    return (
        <FooterDiv className={globalStyles.headerBg}>
            <Button>
                <a href={`mailto:${email}`}>by {devName}</a>
            </Button>
            <Button>
                <a href={`https://github.com/mconnor/ui-code-assessment-quiz`}>code available on Github</a>
            </Button>
        </FooterDiv>
    )
}

export default Footer
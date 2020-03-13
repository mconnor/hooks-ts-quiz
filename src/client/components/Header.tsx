import React from 'react'
import styled from 'styled-components';
import globalStyles from '../App.module.css'

type Props = {
    txt: string;
}

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    width: 100vw;
    padding: 0 0 20px 0;
    
`;




const Header = ({ txt = 'Who Likes Trivia?' }: Props) => {
    return (
        <HeaderDiv className={globalStyles.headerBg}>
            <h1>{txt.toUpperCase()}</h1>
            
        </HeaderDiv>
    )
}

export default Header
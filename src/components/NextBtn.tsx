import React from 'react'
// import styles from './Question.module.css'
import styled from 'styled-components';

type Props = {
    userDidAnswer: boolean;
}


const Button = styled.button`

`;
const WrapDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 10px;

`;
const NextBtn = ({userDidAnswer=false}:Props) => {
    return (
        <WrapDiv>
            <Button 
                type="submit" 
                value= "Next"
                disabled={!userDidAnswer}
            >NEXT</Button>
        </WrapDiv>
    )
}

export default NextBtn 

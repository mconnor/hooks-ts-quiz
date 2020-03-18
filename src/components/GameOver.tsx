import React from 'react'
import styled from 'styled-components';

type Props = {
    score: number;
    outOf: number;
    wrong: number;
    restart: () => void;
}

const GameOverDiv = styled.div`
      width: 60%;
    border: 1px solid black;
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GameOver = ({ score, wrong, outOf, restart }: Props) => {
    return (
        <GameOverDiv>
            <h1>SUMMARY</h1>
            <p>Correct: {score}</p>
            <p>Wrong: {wrong}</p>
            <p>Final Score: {Math.floor((score / outOf * 100))}%</p>
            <button  onClick={restart}>Restart Quiz</button>
        </GameOverDiv>
    )
}

export default GameOver

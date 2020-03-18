import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import GameOver from './components/GameOver';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTitleInput } from './hooks/UseTitleInput';
import useShuffleArray from './hooks/useShuffleArray';
import * as COLORS from  './Colors';
import styled from 'styled-components';



type QuizData = {
    cat: string;
    type: string;
    difficulty: string;
    question: string; 
    correct_answer: string;
    incorrect_answers: [string];
}

type Props = {
    api: string;
    geoURL: string;
    headerTxt: string;
    eMailContact: string;
    devName: string;
    numOfQuestions: number;
}

interface QuizDivProps {
    readonly bgColor: string;
}

const QuizDiv = styled.div<QuizDivProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:  white;
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;
export const App = ({ api, geoURL, headerTxt, eMailContact, devName, numOfQuestions }: Props) => {

    const [geoAPI] = useState(geoURL + process.env.REACT_APP_IP_DATA_API_KEY);
    const [quizDataArray, setQuizDataArray] = useState<Array<QuizData>>([]);
    const [gameOver, setGameOver] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    const [currQuestion, setCurrQuestion] = useState<QuizData>();

    const [scoreCorrect, setScoreCorrect] = useState(0);
    const [scoreWrong, setScoreWrong] = useState(0);
    const [qCount, setQcount] = useState(0);

    const [country, setCountry] = useState('US');
    useShuffleArray(quizDataArray);


    useTitleInput('Trivia - Mike Connor');

    useEffect(() => {
        console.log('fetch geoAPI')
        fetch(geoAPI)
            .then(data => data.json())
            .then(data => {
                if (data.country_code) {
                    setCountry(data.country_code);
                } else {
                    console.warn('api not returning country code. Default set to US')
                }
            }).catch(err => {
                console.error(err.message)
            })

    }, [geoAPI])

    useEffect(() => {
        setCurrQuestion(quizDataArray[qCount])
    }, [qCount, quizDataArray]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setQuizDataArray(data.results)
            })
            .catch((err) => {
                console.error(err.message)
                setFetchError(true)
            })
    }, [api]);

    useEffect(() => {
        setCurrQuestion(quizDataArray[0])
    }, [quizDataArray]);

    useEffect(() => {

        console.log(`${scoreCorrect} correct,  ${scoreWrong} wrong.  ${numOfQuestions - (scoreCorrect + scoreWrong)} questions to go`)
        if ((scoreWrong + scoreCorrect) >= numOfQuestions) {
            setGameOver(true)
        }

    }, [scoreWrong, scoreCorrect, numOfQuestions]);


    const handleSubmitAnswer = (correct: boolean) => {
        if (correct) {
            setScoreCorrect(scoreCorrect + 1)
        } else {
            setScoreWrong(scoreWrong + 1)
        }
        setQcount(qCount + 1)
    }

    const handleRestart = (): void => {
        setQuizDataArray(quizDataArray.slice())
        setScoreWrong(0);
        setScoreCorrect(0);
        setQcount(0);
        setGameOver(false)

    }


    return (
        <QuizDiv bgColor={COLORS.blue}>

            <Header txt={headerTxt} />
            {fetchError ? <h1>Fetch Error </h1> :
                isLoading ? <h1>Loading</h1> :
                    gameOver ? <GameOver score={scoreCorrect} wrong={scoreWrong} outOf={numOfQuestions} restart={handleRestart} /> :
                        (currQuestion &&
                            <Question
                                country={country}
                                quizObj={currQuestion}
                                onSubmitAnswerToApp={handleSubmitAnswer}
                            />)

            }
            <Footer devName="Mike Connor" email="mike@cloudswing.info" />


        </QuizDiv>
    );
}

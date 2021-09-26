import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnsBoolean from './AnsBoolean'
import AnsMult from './AnsMult';
import AnsFillin from './AnsFillin'
import useRemoveEntities from '../hooks/useRemoveEntities';
import useEnglishAltSpelling from '../hooks/useEnglishAltSpelling';

enum QuestionTypes {
    MULT = 'multiple',
    BOOL = 'boolean',
    TEXT = 'text',
}


type QuizData = {
    cat: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string];
}


type Props = {
    quizObj: QuizData;
    onSubmitAnswerToApp: (b: boolean) => void;
    country: string;
};


const Qdiv = styled(motion.div)`
    width: 60%;
    border: 1px solid black;
    border-radius: 4px;
    padding: 48px;

`;

const variants = {
    open: {
        x: 0, transition: {
            delay: .2
        }
    },
    closed: { x: "100%" },
}

export default function Question ({ quizObj, onSubmitAnswerToApp, country = "US" }: Props): JSX.Element{

    const q1 = useRemoveEntities(quizObj?.question);
    const question = useEnglishAltSpelling(q1, country);

    return (
        <Qdiv
            variants={variants}
            initial='closed'
            animate='open'>
            <p>{question}</p>
            {
                ((quizObj?.type === QuestionTypes.MULT) ?
                    <AnsMult
                        rightAnswer={quizObj.correct_answer}
                        wrongAnswers={quizObj.incorrect_answers}
                        onSubmitAnswer={onSubmitAnswerToApp}
                        country={country}
                    />
                    :
                    (quizObj.type === QuestionTypes.BOOL) ?
                        <AnsBoolean
                            rightAnswer={quizObj.correct_answer}
                            onSubmitAnswer={onSubmitAnswerToApp} /> :
                        <AnsFillin
                            rightAnswer={quizObj.correct_answer}
                            onSubmitAnswer={onSubmitAnswerToApp} />
                )
            }
        </Qdiv>
    );
};


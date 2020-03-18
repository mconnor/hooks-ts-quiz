import React, { useState, useEffect } from 'react'
import NextBtn from './NextBtn'
import styles from '../App.module.css'

type Props = {
    rightAnswer: string;
    onSubmitAnswer: (b: boolean) => void;
}

const  regex: RegExp = /\D/gi;

const AnsFillin = ({ rightAnswer, onSubmitAnswer }: Props) => {

    const [userAnswer, setUserAnswer] = useState<string>('');
    const [userHasAnswered, setUserHasAnswered] = useState(false);
    const [answerIsNum, setAnswerIsNum] =  useState(false);

    useEffect(() => {
        const  bool:boolean = !isNaN(rightAnswer as any)
        setAnswerIsNum(bool)
        setUserAnswer('')
    }, [rightAnswer])

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const correctBool = (userAnswer.toLowerCase() === rightAnswer.toLowerCase());
        onSubmitAnswer(correctBool) // passes state up
        setUserHasAnswered(false);
    };



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        answerIsNum ? setUserAnswer(e.target.value.replace(regex, '')) : setUserAnswer(e.target.value);
        let str:string;
        if (answerIsNum) {
            str = e.target.value.replace(regex, '');
        } else {
            str =  e.target.value;
        }

        setUserAnswer(str)
       
        if (str.length > 0) {
            setUserHasAnswered(true);
        } else {
            setUserHasAnswered(false);
        }
    }

    return (
        <div className={styles.myComponent}>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ width: '300px' }}
                    id="userAnswer"
                    value={userAnswer}
                    onChange={handleInput}
                />

                <NextBtn userDidAnswer={userHasAnswered} />
            </form>
        </div>
    )
}

export default AnsFillin;

import React, { useState, useEffect } from 'react'
import NextBtn from './NextBtn'
import Choice from './Choice'
import styles from '../App.module.css'

enum BoolTypes {
    TRUE = 'True',
    FALSE = 'False'
}

type Props = {
    rightAnswer: string;
    onSubmitAnswer: (b: boolean) => void;
}

const AnsBoolean = ({ rightAnswer, onSubmitAnswer }: Props) => {

    const [correctAnswer, setCorrectAnswer] = useState(true);
    const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
    const [userHasAnswered, setUserHasAnswered] = useState(false);
    const [checkedRadioBtn, setCheckedRadioBtn] = useState<HTMLInputElement>();

    useEffect(() => {
        if (rightAnswer === 'True') {
            setCorrectAnswer(true)
        } else {
            setCorrectAnswer(false)
        }
    }, [rightAnswer])



    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (checkedRadioBtn) checkedRadioBtn.checked = false;
        const correctBool = (userAnswer === correctAnswer)
        onSubmitAnswer(correctBool) // passes state up
        setUserAnswer(null); // need to reset... two T/F questions in a row don't trigger a re-render
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserHasAnswered(true)
        setCheckedRadioBtn(e.target)
        if (e.target.value === BoolTypes.TRUE) {
            setUserAnswer(true)
        } else {
            setUserAnswer(false)
        }

    };

    return (
        <div className={styles.myComponent}>
            <form onSubmit={handleSubmit}>
                <Choice
                    answer={BoolTypes.TRUE}
                    onChange={handleOptionChange}
                    checked={userAnswer === true}
                />
                <Choice
                    answer={BoolTypes.FALSE}
                    onChange={handleOptionChange}
                    checked={userAnswer === false}
                />
                <NextBtn userDidAnswer={userHasAnswered} />
            </form>
        </div>
    )
}

export default AnsBoolean;

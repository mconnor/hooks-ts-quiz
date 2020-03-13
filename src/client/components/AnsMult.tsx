import React, { useState, useEffect } from 'react';
import styles from '../App.module.css'
import NextBtn from './NextBtn'
import useRemoveEntities from '../hooks/useRemoveEntities';
import useEnglishAltSpelling from '../hooks/useEnglishAltSpelling';
import useShuffleArray from '../hooks/useShuffleArray';
import Choice from './Choice'


type Props = {
    rightAnswer: string;
    wrongAnswers: Array<string>;
    onSubmitAnswer: (b: boolean) => void;
    country: string;
    
}

const AnsMulti: React.FC<Props> = ({ rightAnswer, wrongAnswers, onSubmitAnswer, country="US" }) => {

    const [userAnswer, setUserAnswer] = useState<string>();
    const [userHasAnswered, setUserHasAnswered] = useState(false);
    const cleanedRightAnswer = useEnglishAltSpelling(useRemoveEntities(rightAnswer), country);
    const [allAnswers, setAllAnswers] = useState<Array<string>>(['']);
    const shuffledAnswers = useShuffleArray(allAnswers);

    useEffect(() => {
        const arr = wrongAnswers.slice();
       arr.push(rightAnswer)
       setAllAnswers(arr)
    }, [wrongAnswers, rightAnswer])


    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setUserHasAnswered(true);
        setUserAnswer(e.target.value)
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        onSubmitAnswer((userAnswer === cleanedRightAnswer)) // passes state up
        setUserHasAnswered(false);
    }

    return (
        <div className={styles.myComponent}>
            <form onSubmit={handleSubmit}>
                {shuffledAnswers?.map((answer:string, index:number) => (
                    <Choice 
                        key={index} 
                        answer={answer} 
                        onChange={handleOptionChange} 
                        checked={userAnswer === answer}
                        country={country} />
                ))
                }
                <NextBtn userDidAnswer={userHasAnswered} />
            </form>
        </div>
    )
}

export default AnsMulti;

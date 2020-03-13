import { useState, useEffect } from 'react';


function useShuffleArray(myArray: Array<any>) {
    const [shuffledArray, setShuffledArray] = useState<Array<any>>();

    useEffect(() => {
        console.log('SHUFFLE')
        const shuffle = (arr: Array<any>): void  => {
            //Fisher-Yates Algorithm
            for (let i: number = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * i)
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            setShuffledArray(arr);
        }
        shuffle(myArray);

    }, [myArray, setShuffledArray]);

    return shuffledArray;
}

export default useShuffleArray;
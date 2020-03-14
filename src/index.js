import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './client/App';

ReactDOM.render(<App 
        api='https://gist.githubusercontent.com/mconnor/57fdef47f97e39741412215fa4d669c9/raw/c3453dcdcc571030cdaca1d6a475ba106f1933e8/politicalTrivia.json'
        geoURL = 'https://api.ipdata.co/2601:8:be00:cf20:ca60:ff:fe09:35b5?api-key='
        eMailContact='mike@cloudswing.info'
        devName= 'Mike Connor'
        numOfQuestions = '5'
         headerTxt= "Political Trivia"

    />, document.getElementById('root'));
    
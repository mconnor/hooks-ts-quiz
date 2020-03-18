import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(<App 
        api='/api/quiz'
        geoURL = 'https://api.ipdata.co/2601:8:be00:cf20:ca60:ff:fe09:35b5?api-key='
        eMailContact='mike@cloudswing.info'
        devName= 'Mike Connor'
        numOfQuestions = '5'
         headerTxt= "Political Trivia"

    />, document.getElementById('root'));
    
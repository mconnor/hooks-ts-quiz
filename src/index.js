import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './client/App';

ReactDOM.render(<App 
        api='http://localhost:4000/api/questions'
        geoURL = 'https://api.ipdata.co/2601:8:be00:cf20:ca60:ff:fe09:35b5?api-key='
        eMailContact='mike@cloudswing.info'
        devName= 'Mike Connor'
        numOfQuestions = '6'
    />, document.getElementById('root'));
    
import {useState, useEffect } from 'react'

function useRemoveEntities(copy:string){
    const [cleanString, setCleanString] = useState('');

    useEffect(() => {
        function replace_HTML_entities(str: string):void {
            // swap in curly quotes
            str = str.replace(/&#039;\b/g, '‘');  
            str = str.replace(/\b&#039;/g, '’');
            str = str.replace(/&quot;\b/g, '“');
            str = str.replace(/(\b|\.)&quot;/g, '”');
            str = str.replace(/&quot;(?=\s)/g, '”');
            str = str.replace(/&amp;/g, '&');
            
            setCleanString(str);
        }
        replace_HTML_entities(copy);

    }, [copy]);

    return cleanString;
}

export default useRemoveEntities;

import  {useState, useEffect } from 'react'


enum CountryCodes {
    US = 'US', // assume anything else uses british spelling
}


function useEnglishAltSpelling(copy: string, countryCode: string)  {
    const [cleanString, setCleanString] = useState('');

    useEffect(() => {
        function replaceUsUkSpelling(str:string, _countryCode:string):void {
            // swap in curly quotes
            if (_countryCode === CountryCodes.US) {
                str = str.replace(/\/(\w)+/g, "");
            } else {
                str = str.replace(/(\w)+\//g, "");
            }
            setCleanString(str);
        }
        replaceUsUkSpelling(copy, countryCode);

    }, [copy, countryCode]);

    return cleanString;
}

export default useEnglishAltSpelling;


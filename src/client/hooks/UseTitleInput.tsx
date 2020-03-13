import { useState, useEffect } from 'react';


const useTitleInput = (initialValue="Quiz") => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        document.title = value;
    });
    return [value, setValue];
}

export { useTitleInput };

import React, { useState } from 'react'

//string

function UseStateString() {
    const [str, setStr] = useState('Hello')

    const handleChange = () => {
        // setStr('Goodbye')//it updates the state but just  once
        // setStr(str + 'Goodbye')
        setStr(prevState => prevState + 'Goodbyee')
    }
    console.log(str);


    return (
        <div>
            <h1>{str}</h1>
            <button onClick={handleChange}>Change state</button>
        </div>
    )
}

export default UseStateString
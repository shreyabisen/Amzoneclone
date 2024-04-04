import React, { useState, useEffect } from 'react'

function UseEffectDoNot() {

    const [count, setcount] = useState(0)
    useEffect(() => {
        let abc = true
        if (abc === true) {
            setcount(prevState => prevState + 10)
        }
        return () => abc = false
    }, [])

    return (
        <div>
            <h1>UseEffectDoNot</h1>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffectDoNot
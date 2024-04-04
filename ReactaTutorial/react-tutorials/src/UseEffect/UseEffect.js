import React, { useEffect, useState } from 'react'

function UseEffect() {

    useEffect(() => {

        console.log('from UseEffect');
    }, [])

    const [count, setcount] = useState(0)



    const handleClick = () => {
        setcount(prevState => prevState + 1)
        console.log('button clicked')
    }

    console.log('rendered');
    return (
        <div>
            <h1>UseEffect</h1>
            <button onClick={handleClick}>clicked{count}Times</button>
        </div>
    )
}

export default UseEffect
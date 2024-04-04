import React, { useState } from 'react'
import UseEffect2 from './UseEffect2'

function UseEffect1() {
    const [count, setcount] = useState(10)
    const handleClick = () => {
        setcount(prevState => prevState + 10)
        console.log('button clicked');
    }

    return (

        <div>
            <h1>UseEffect1</h1>
            <h1>---------------------</h1>
            <UseEffect2
                count={count}
                handleClick={handleClick}
            />
        </div>
    )
}

export default UseEffect1
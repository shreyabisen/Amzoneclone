import React, { useEffect, useState } from 'react'

function UseEffectDependencies() {

    const [count1, setcount1] = useState(10)
    const [count2, setcount2] = useState(30)

    useEffect(() => {
        console.log("count1+count2=>", count1 + count2);
    }, [count1, count2])

    const handleClicked = () => {
        //setcount1(prevState => prevState + 10)
        // setcount2(prevState => prevState + 30)
        console.log("button clicked")
        console.log('renderd')

    }

    return (
        <div>
            <h1>UseEffectDependencies</h1>
            <button onClick={handleClicked}>Clicked</button>
        </div>
    )
}

export default UseEffectDependencies
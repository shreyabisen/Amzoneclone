import React, { useState } from 'react'

function Number() {

    const [count1, setcount1] = useState(0)

    const handleChange = () => {
        setcount1(prevState => prevState + 10)
        setcount1(prevState => prevState + 20)
        setcount1(prevState => prevState + 30)
    }
    console.log(count1);


    return (
        <div>
            <h1>{count1}</h1>
            <button onClick={handleChange}>Change value</button>

        </div>
    )
}

export default Number
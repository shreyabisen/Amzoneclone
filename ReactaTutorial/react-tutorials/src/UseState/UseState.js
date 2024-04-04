import React, { useState } from 'react'

function UseState() {

    //var count1 = 0


    const [count1, setcount1] = useState(0)
    //count1 is a state variable
    //setcount1 is asetter function\, 
    //withpout which u can not update the value of variable count1


    // count1 = 10
    const handleChange = () => {
        setcount1(10)
        console.log(count1);

    }
    console.log(count1);

    return (
        <div>
            <h1> {count1}</h1>
            <button onClick={handleChange}>change Value</button>
        </div>
    )
}


export default UseState
import React, { useRef, useState } from 'react'

function UseRef() {
    console.log('Useref component rendered');

    const [count1, setcount1] = useState(0)

    const increamentCount1 = () => {
        setcount1(count1 + 1)
        console.log('Rendered from count1');
    }
    // const [count2, setcount2] = useState(0)
    const count2 = useRef(0)
    const increamentCount2 = () => {
        // setcount2(count2 + 1)
        count2.current = count2.current + 1
        console.log('Rendered from count2');
    }



    return (
        <div>

            <button onClick={increamentCount1}>Count1-{count1}</button>
            {/* <button onClick={increamentCount2}>Count2-{count2}</button> */}
            <button>Count2-{count2.current}</button>

        </div>
    )
}

export default UseRef
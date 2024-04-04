import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [count1, setcount1] = useState(0)
    const increamentCount1 = () => {
        setcount1(count1 + 1)
    }
    const [count2, setcount2] = useState(0)
    const increamentCount2 = () => {
        setcount2(count2 + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return count1 % 2 === 0
    }, [count1])

    return (
        <div>
            <button onClick={increamentCount1}>Count1-{count1}</button>
            {  //this is without usemomo hook
                // isEven() ? <h3>Even</h3> : <h3>Odd</h3>

                //this is with usememo hook
                isEven ? <h3>Even</h3> : <h3>Odd</h3>
            }
            <button onClick={increamentCount2}>Count2-{count2}</button>


        </div>
    )
}

export default UseMemo
import React, { useEffect, useState } from 'react'


function UseEffect2(props) {
    const { count, setcount, handleClick } = props;

    useEffect(() => {
        console.log('count:', count);
    }, [count])



    return (
        <div>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default UseEffect2
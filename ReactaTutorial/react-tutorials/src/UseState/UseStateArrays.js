import React, { useState } from 'react'

function UseStateArrays() {

    const names = ['shreya', 'diksha', 'bhagysharee']
    return (
        <div>
            <h1>
                {
                    names.map((val, ind) =>
                        val + `${ind === names.length - 1 ? '' : ', '}`
                    )
                }

            </h1>

        </div>
    )

    // const [arr, setarr] = useState([1, 2, 3, 4])

    // const newArr = ['a', 'b', 'c', 'd']

    // const handdleChange = () => {
    //it updates the state of the array,but just once
    //setarr([5, 6, 7, 8])
    // setarr([...arr, ...newArr]) ye bh javascript ka hi tarika h array ko replace krne ka
    // setarr(prevState => [...prevState, ...newArr])//it will add newArr to arry ye reactjs ka traika h

    //it will add newArr to arr
    //setarr(prevState=>{return [...prevState,...,newArr]})
    // }
    // console.log('arr=>', arr);

    // return (
    //     <div>
    //         <h1>{arr}</h1>
    //         <button onClick={handdleChange}>Change Array</button>
    //     </div>
    // )
}

export default UseStateArrays
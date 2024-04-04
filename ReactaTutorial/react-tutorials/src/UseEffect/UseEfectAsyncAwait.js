import React, { useEffect } from 'react'

function UseEfectAsyncAwait() {

    useEffect(() => {
        let abc = true
        async function funName() {
            if (abc === true) {


                fetch("https://jsonplaceholder.typicode.com/users")
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err))

                console.log("funName");
            }
        }
        funName()
        return () => abc = false
    }, [])
    return (
        <div>
            <h1>UseEfectAsyncAwait</h1>
        </div>
    )
}


export default UseEfectAsyncAwait
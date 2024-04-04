import React, { useEffect } from 'react'

function UseEffectCleanup() {

    useEffect(() => {
        let abc = true
        if (abc === true) {
            console.log("useEffect executed");
        }
        return () => { abc = false }
    }, [])
    useEffect(() => {
        const unSubscribe = fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

        return () => unSubscribe;
    })

    // useEffect(() => {
    // var timeout = setTimeout(() => {
    //     console.log("timeout Executed");
    //     // }, 2000);
    //     return () =>
    //         clearTimeout(timeout)

    // }, [])
    return (
        <div>UseEffectCleanup</div>
    )
}

export default UseEffectCleanup
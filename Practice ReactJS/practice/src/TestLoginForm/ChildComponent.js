import React from 'react'

function ChildComponent(props) {
    const { emailid, password } = props

    return (
        <div>
            <h1>Email id</h1>
            <h1>password</h1>
        </div>
    )
}

export default ChildComponent
import React from 'react'

function Button(props) {
    const { handlClick, children } = props

    console.log("Button renderd");
    return (
        <div>
            <button onClick={handlClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
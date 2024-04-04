import React from 'react'

function ComponentA(props) {

    //peops will be an object

    const { name } = props
    return (
        <div>{name}</div>
    )
}

export default ComponentA
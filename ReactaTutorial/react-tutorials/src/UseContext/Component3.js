import React from 'react'
import Component4 from './Component4'

function Component3(props) {
    const { name, surname } = props
    return (
        <div>
            <Component4 />
            name={name}
            surname{surname}

        </div>
    )
}

export default Component3
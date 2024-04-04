import React from 'react'
import ComponentA from './ComponentA'

function ListsAndKeys() {
    const names = ['Bruce', 'Clark', 'Diagna']

    return (
        <div>
            {/* {
                // names.map((name, index) => <h1 key={index}>{name}</h1>)
            } */}
            {/* {
                names.map((name, index) => (
                    <div key={index}>
                        <h1>{names}</h1>
                        <h1>--------------------</h1>
                    </div>
                ))
            } */}
            {
                names.map((name, index) => (
                    <ComponentA
                        key={index}
                        name={name}
                    />
                )
                )
            }

        </div>
    )
}

export default ListsAndKeys
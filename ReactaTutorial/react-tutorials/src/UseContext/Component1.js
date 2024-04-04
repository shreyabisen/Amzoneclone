import React, { createContext, useState } from 'react'
import Component2 from './Component2'
// create context with createContext()and expert it
export var NAME_CONTEXT = createContext()
export var SURNAME_CONTEXT = createContext()

function Component1() {
    //fetched data//created
    const [name, setname] = useState('shreya')
    const [surname, setsurname] = useState('bisen')
    // const [surname, setsurname] = useState('bisen')

    return (
        <div>
            {/* 2.wrap the component with provider with value */}
            <NAME_CONTEXT value={{ name, setname }}>
                <SURNAME_CONTEXT value={{ surname, setsurname }}>
                    <Component2 />
                    <NAME_CONTEXT />
                    <SURNAME_CONTEXT />
                </SURNAME_CONTEXT>
            </NAME_CONTEXT>

        </div >
    )
}

export default Component1
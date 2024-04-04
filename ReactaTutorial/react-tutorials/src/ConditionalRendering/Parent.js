import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function Parent() {

    var a = 10, b = 100;
    return (
        <div>

            {/* // if else replaced by ternary oprator */}
            {
                a > b ? <ComponentA /> : <ComponentB />

            }
            {/* // execute if condition is true */}
            {
                a > b && <ComponentA />
            }
            {/* // execute if condition is false */}
            {
                a < b || <ComponentB />
            }
        </div>

    )
}

export default Parent
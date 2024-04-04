import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {

    const obj = {
        name: 'shreyaa',
        age: '21',
        city: 'Gondia',
        courses: ['React', 'Angular', 'veu', 'Node'],
        info: {
            address: 'Forest office Gondia',
            phone: '8412986789',
            email: 'shreya@gmail.com',
            school: {
                name: 'dhote bandhu sacience college Gondia',
                city: 'gondia'

            }
        }
    }


    return (
        <div>

            name={obj.name}
            age={obj.age}
            city={obj.city}
            courses={obj.courses}
            info={obj.info}

        </div>
    )
}

export default ComponentA
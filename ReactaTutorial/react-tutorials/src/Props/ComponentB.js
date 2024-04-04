import React from 'react'
import ComponentA from './ComponentA';

function ComponentB(props) {
    //props will be an object

    //const {}=props
    const {
        name,
        age,
        city,
        courses,
        info: {
            address,
            phone,
            email,
            school: {
                //rename props
                name: schoolName,
                city: schoolcity
            }
        },
        //introduce new variable with defaiult value
        DoB = "18 May 2002"


    } = props

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{city}</h1>
            <h1>{courses}</h1>
            <h1>{address}</h1>
            <h1>{phone}</h1>
            <h1>{email}</h1>
            <h1>{schoolName}</h1>
            <h1>{schoolcity}</h1>
            <h1>{DoB}</h1>
        </div>
    )
}

export default ComponentB
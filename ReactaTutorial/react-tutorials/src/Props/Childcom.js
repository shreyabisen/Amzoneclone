import React from 'react'
import GrandChildComp from './GrandChildComp'

function Childcom({ name, city, phone, surname, handleClick }) {
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>surname : {surname}</h1>
            <h1>city : {city}</h1>
            <h1>phone no : {phone}</h1>

            <button onClick={handleClick}>Click Me</button>

            <GrandChildComp
                name={"shreya"}
                city={city}
                phone={"12346789"}
                surname={surname}
                handleClick={handleClick}


            />

        </div>
    )
}


export default Childcom
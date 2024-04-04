import React from 'react'
import Childcom from './Childcom'

function Parent1com() {

    var name = "shreyaa", city = "Nagpur", phone = "097654678", surname = "bisen"

    const handleClick = () => {
        console.log('button clicked');
    }

    return (
        <div>
            {/* // props passing */}
            <Childcom
                // name={name}
                // city={city}
                // phone={phone}
                // surname={surname}

                name={"Tanu"}
                city={"Nagpur"}
                phone={"12346789"}
                surname={"bisen"}
                handleClick={handleClick}
            />
            <hr />
            <Childcom
                name={"shreya"}
                city={city}
                phone={"12346789"}
                surname={surname}


            />


        </div>

    )
}

export default Parent1com
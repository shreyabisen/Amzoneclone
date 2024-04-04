import React, { useState } from 'react'

function UseState1() {

    const [userInfo, setUserInfo] = useState({
        name: 'university of nagpur',
        city: "gondia",
        establishedIn: '1982',
        classes: ['kg1', 'kg2', 'class1'],
        info: {
            teachersNo: '45',
            principle: 'naiadu',
            vicePrinciple: 'Mishra'
        },
        address: {
            Addr: "Dhote bandhu science college",
            city: 'gondia'

        },
        phone: '841276890'
    })
    const handleChange = () => {
        setUserInfo(prevState => {
            return {
                ...prevState,
                name: 'xzevier international public school',
                city: 'pune'
            }

        })



    }





    return (
        <div>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.city}</h1>
            <h1>{userInfo.establishedIn}</h1>
            <h1>{userInfo.classes}</h1>
            <h1>{userInfo.info.principle}</h1>
            <h1>{userInfo.info.vicePrinciple}</h1>
            <h1>{userInfo.address.addr}</h1>
            <h1>{userInfo.address.city}</h1>
            <h1>{userInfo.phone}</h1>

            <button onClick={handleChange}>change state</button>

        </div>
    )
}

export default UseState1
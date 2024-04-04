import React, { useState } from 'react'



function UsestateObjects() {
    const [userInfo, setUserInfo] = useState({
        name: 'john',
        age: 30,
        course: ['React', 'Angular', 'veu', 'node'],
        info: {
            address: 'forest Office',
            phone: 12345,
            email: 'shreya@gmail.com',
            school: {
                name: 'university of nagpur',
                city: 'gondia'
            }

        }

    })
    const handdleChange = () => {
        setUserInfo(prevState => {
            return {
                ...prevState,
                name: 'shreya',          //changes the value os existing property
                userCity: 'nagpur',     //add a new proprty with value
                age: prevState.age + 10,//it increaments the value of existing propertyn by 10

                //...prevState course contains all the exixting elemnt in the array
                course: [...prevState.course, 'Python', 'Html', 'css'],//it adds a new elements in the array

                info: {
                    //...prevState onfo contains all the elemnts in theuserInf
                    ...prevState.info,
                    address: 'Bhande plot',
                    school: {
                        // ...prev State .info.school contains all the existing elemnt 
                        //in the userinfo.info.school object
                        ...prevState.info.school,
                        //it adds a new proprty with value inside userInfo .info.school
                        country: "INDIA"
                    }
                }
            }
        })

    }

    return (
        <div>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.age}</h1>
            <h1>{userInfo?.userCity}</h1>
            <h1>{userInfo.course}</h1>
            <h1>{userInfo.info.address}</h1>
            <h1>{userInfo.info.phone}</h1>
            <h1>{userInfo.info.email}</h1>
            <h1>{userInfo.info?.school?.name}</h1>
            <h1>{userInfo.info?.school?.city}</h1>
            <button onClick={handdleChange}>change state</button>

        </div>
    )
}

export default UsestateObjects
import React, { useCallback } from 'react'
import { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function UseCallback() {
    const [age, setage] = useState(0)
    const [salary, setsalary] = useState(500000)

    const IncreamentAge = useCallback(() => {

        setage(age + 10)
    }, [age])

    const Increamentsalary = useCallback(() => {
        setsalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="age" count={age} increament={IncreamentAge} />
            <Button handlClick={IncreamentAge}>Increament Age</Button>
            <Count text="salary" count={salary}></Count>
            <Button handlClick={Increamentsalary}>Increament salary</Button>
        </div>
    )
}

export default UseCallback
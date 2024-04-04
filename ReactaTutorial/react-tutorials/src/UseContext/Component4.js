import React, { useContext } from 'react'

import { NAME_CONTEXT, SURNAME_CONTEXT } from './Component1'

const handlechange = () => {
    setname: 'shreya',
        setsurname: 'bisen'

    //  function Component4() {
    //     const { name, setname } = useContext(NAME_CONTEXT)
    //     const { surname, setsurname } = useContext(SURNAME_CONTEXT)
    //var name = 'shreya', surname = 'Bisen'
    return (
        <div>
            <h1>{name}</h1>
            <h2>{surname}</h2>

            <button onClick={handlechange}>
                change name and surname
            </button>
            <button onClick={() =>
                setname('shreya'),
                setsurname('bisen')

            }
            />

        </div>

        // {/* <button onClick={() => setname('tanu')}>change name</button>
        // <button onClick={() => setsurname('shreya')}>change surname</button> */}

    )

}

export default Component4
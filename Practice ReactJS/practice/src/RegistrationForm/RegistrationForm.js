import React from 'react'
import TextField from '@mui/material/TextField';

function RegistrationForm() {
    return (
        <div>
            <h1>Registration Form</h1>
            {/* first name */}
            <TextField id="First name"
                label="First name"
                variant="filled" />

            <br />
            {/* last name */}
            <TextField id="Last name"
                label="Last name"
                variant="filled"
                type="text"
            />
            <br />

            {/* email id */}
            <TextField id="Email id"
                label="Email id"
                variant="filled"
                type="text"
            />
            <br />
            {/* password */}
            <TextField id="Password"
                label="Password"
                variant="filled"
                type="text"
            />

            {/* confirm password */}
            {/* DOB */}
            {/* gender */}
            {/* course */}


        </div>
    )
}

export default RegistrationForm
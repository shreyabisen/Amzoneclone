import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ParentComponent() {
    return (
        <div>
            <h1>Login Form</h1>
            {/* Email-id-text-box */}
            <TextField
                id="Email id"
                label="email id"
                variant="outlined"
                type="text"
            />
            <br />


            {/* Password */}
            <TextField
                id="PWd"
                label="password"
                variant="outlined"
                type="text"
            />
            <br />
            {/* button */}
            <Button
                variant="Sign-In">
                Sign-In</Button>




        </div>
    )
}

export default ParentComponent
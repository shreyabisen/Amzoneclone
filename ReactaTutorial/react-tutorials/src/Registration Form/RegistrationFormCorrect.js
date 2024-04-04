import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

function RegistrationFormCorrect() {

    const [info, setInfo] = useState({
        fname: '', lname: '', email: '', pwd: '', cnfpwd: ''

    })
    const handleChange = (event) => {
        setInfo(prevState => {
            return { ...prevState, [event.target.name]: event.target.value }
        })
    }


    return (
        <div>
            <h1>RegistrationForm</h1>
            <TextField
                id="fname"
                name="fname"
                label="First Name"
                variant="standard"
                type="text"
                value={info.fName}
                onChange={handleChange}
            />

            <br />

            {/* last name */}
            <TextField
                id="lname"
                name="lname"
                label="Last Name"
                variant="standard"
                type="text"
                value={info.lName}
                onChange={handleChange}
            />
            <br />

            {/* email id */}
            <TextField
                id="email"
                name="email"
                label="email id"
                variant="standard"
                type="email"
                value={info.email}
                onChange={handleChange}
            />
            <br />
            {/* password */}
            <TextField
                id="pwd"
                name="pwd"
                label="Password"
                variant="standard"
                type="Password"
                value={info.pwd}
                onChange={handleChange}
            />
            <br />

            {/* confirm password */}
            <TextField
                id="cnfPwd"
                name="cnfPwd"
                label=" Confirm Password"
                variant="standard"
                type="Password"
                value={info.cnfPwd}
                onChange={handleChange}
            />
        </div>
    )
}

export default RegistrationFormCorrect
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




function RegistrationForm() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setemail] = useState('')
    const [pwd, setfpwd] = useState('')
    const [cnfPwd, setcnfPwd] = useState('')
    const [gender, setgender] = useState('')
    const [courses, setcourses] = useState([])

    console.log(fName, lName, email, pwd, cnfPwd, gender, courses);


    return (
        <div className='registrationform'>
            <h1>RegistrationForm</h1>

            {/* first name */}
            <TextField
                id="fname"
                name="fname"
                label="First Name"
                variant="standard"
                type="text"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
            />

            <br />

            {/* last name */}
            <TextField
                id="lname"
                name="lname"
                label="Last Name"
                variant="standard"
                type="text"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
            />
            <br />

            {/* email id */}
            <TextField
                id="email"
                name="email"
                label="email id"
                variant="standard"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <br />
            {/* password */}
            <TextField
                id="pwd"
                name="pwd"
                label="Password"
                variant="standard"
                type="Password"
                value={pwd}
                onChange={(e) => setfpwd(e.target.value)}
            />
            <br />

            {/* confirm password */}
            <TextField
                id="cnfPwd"
                name="cnfPwd"
                label=" Confirm Password"
                variant="standard"
                type="Password"
                value={cnfPwd}
                onChange={(e) => setcnfPwd(e.target.value)}
            />

            {/* DOB */}
            <input type="date" />s
            <br />
            {/* gender */}
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            {/* courses */}
            <FormGroup style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Courses</FormLabel>
                <FormControlLabel control={<Checkbox defaultChecked />} label="HTML" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="CSSML" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="JS" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="REACT" />


            </FormGroup>
            <br />

            {/* states */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <br />
            {/* submit button */}
            <LoadingButton
                loading={false}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Save
            </LoadingButton>



        </div>
    )
}

export default RegistrationForm
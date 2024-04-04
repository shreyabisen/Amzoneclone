import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TextField } from '@mui/material';
import '../App.css'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const count = useSelector((state) => state.basket.items.length)
    return (
        <header>
            <Link to="/home">
                <div className="dataBox">
                    <img src="logo.png" alt="" />
                </div>
            </Link>

            {/* <!-- user location --> */}
            <div className="dataBox">

                <LocationOnIcon style={{ color: 'white', marginRight: '8px' }} />
                <div className="dataBoxText">
                    <p>Deliver to Nikhil</p>
                    <h3>Nagpur, 440015</h3>
                </div>
            </div>

            {/* <!-- search bar --> */}
            {/* <input type="text" placeholder="Search here.." /> */}
            <TextField
                id="outlined-basic"
                label="Outlined" variant="outlined"
                style={{
                    backgroundColor: 'white',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '20px'
                }}
            />


            {/* <!-- Account  --> */}
            <div className="dataBox">
                <div className="dataBoxText">
                    <p>Hello, Nikhil</p>
                    <h3>Accounts & Lists</h3>
                </div>

                <ArrowDropDownIcon style={{ color: 'white', marginLeft: '5px' }} />
            </div>

            {/* <!-- returns and orders --> */}
            <div className="dataBox">
                <div className="dataBoxText">
                    <p>Returns</p>
                    <h3>& Orders</h3>
                </div>
            </div>

            {/* <!-- cart --> */}
            <Link to="/basket">
                <div className="dataBox">
                    <Badge badgeContent={count} color="primary">

                        <ShoppingCartIcon style={{ color: 'white', fontSize: '30px' }} />
                    </Badge>
                </div>
            </Link>
        </header>
    )
}

export default Header
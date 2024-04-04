import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'

function Navbar() {
    const showSidebar = () => {
        var leftSidebar = document.getElementById('leftSidebar')
        leftSidebar.style.display = 'block'
    }

    return (
        <nav>
            <leftSidebar />
            <p onClick={showSidebar}>
                {/* <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    style={{ color: 'white', fontSize: '16px' }}
                // style="color: white; font-size: 16px"
                ></i> */}
                <MenuIcon style={{
                    color: 'white', fontSize: '18px',
                }} />
                All
            </p>
            <p>Amazon Mini TV</p>
            <p>Sell</p>
            <p>Gift Cards</p>
            <p>Amazon Business</p>
            <p>Buy Again</p>
            <p>Browsing History</p>
            <p>Smarthphones</p>
            <p>Electronics</p>
        </nav>
    )
}

export default Navbar
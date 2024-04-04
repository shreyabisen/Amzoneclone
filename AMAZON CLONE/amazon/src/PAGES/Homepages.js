import React, { useState } from 'react'
import Header from '../Components1/Header'
import Navbar from '../Components1/Navbar'
// import ProductsList from '../Components1/ProductsList'
import '../App.css'
import CancelIcon from '@mui/icons-material/Cancel';
import Productlist from '../Components1/Productlist';

function Homepage() {

    const [openSidebar, setopenSidebar] = useState(false)

    const hideSidebar = () => {
        setopenSidebar(false)
    }

    return (
        <div>

            {
                openSidebar && (
                    <div className="leftSidebar" id="leftSidebar">
                        <div className="heading">
                            <h1>Left Sidebar</h1>
                            <CancelIcon
                                onClick={hideSidebar}
                                style={{ fontSize: '30px' }}
                            />
                        </div>

                        <div className="items">
                            <h1>Trending</h1>
                            <div className="oneItem">
                                <p>Best Sellers</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="oneItem">
                                <p>New Releases</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="oneItem">
                                <p>Movers & Shakers</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </div>
                    </div>
                )
            }


            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar

                setopenSidebar={setopenSidebar}
            />

            {/* Products List */}
            <Productlist />
        </div >
    )
}

export default Homepage

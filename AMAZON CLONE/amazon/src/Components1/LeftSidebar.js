import React from 'react'
import '../App.css'

function LefrSidebar() {
    return (
        <div className="leftSidebar" id="leftSidebar">
            <div className="heading">
                <h1>Left Sidebar</h1>
                <i
                    onClick="hideSidebar()"
                    // style="font-size: 30px"
                    style={{ color: 'gray', fontSize: '30px' }}
                    className="fa fa-times"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="items">
                <h1>Trending</h1>
                <div className="oneItem">
                    <p>Best Sellers</p>
                    <i
                        //style="color: gray; font-size: 14px"
                        style={{ color: 'gray', fontSize: '14px' }}
                        className="fa fa-chevron-right"
                        aria-hidden="true"
                    ></i>
                </div>
                <div className="oneItem">
                    <p>New Releases</p>
                    <i
                        // style="color: gray; font-size: 14px"
                        style={{ color: 'gray', fontSize: '14px' }}
                        className="fa fa-chevron-right"
                        aria-hidden="true"
                    ></i>
                </div>
                <div className="oneItem">
                    <p>Movers & Shakers</p>
                    <i
                        // style="color: gray; font-size: 14px"
                        style={{ color: 'gray', fontSize: '14px' }}
                        className="fa fa-chevron-right"
                        aria-hidden="true"
                    ></i>
                </div>
            </div>
        </div>
    )
}

export default LefrSidebar
import React from 'react'
import NewsFeed from '../Components/NewsFeed'
import LeftSideBar from '../Components/LeftSideBar'
import RightSidebar from '../Components/RightSidebar'

function HomePage() {
    return (
        <div>

            <NewsFeed />

            <LeftSideBar />

            <RightSidebar />


        </div>
    )
}

export default HomePage
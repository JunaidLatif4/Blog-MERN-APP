import React from 'react'

import Heading from "./HomeComponents/HeadingSection"
import Post from "./HomeComponents/PostSection"
import SideBar from './HomeComponents/SideBarSection'

import './CSS/Home.scss'

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Heading />

                <div className="post_section">
                    <div className="post_body">
                        <Post />
                    </div>

                    <div className="sidebar">
                        <SideBar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

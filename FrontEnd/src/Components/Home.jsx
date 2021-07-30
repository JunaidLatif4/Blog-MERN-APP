import React from 'react'

import Heading from "./HomeComponents/HeadingSection"
import Post from "./HomeComponents/PostSection"
import SideBar from './HomeComponents/SideBarSection'

import img1 from '../IMG/demo_img1.jpg'
import img2 from '../IMG/demo_img2.jpg'
import img3 from '../IMG/demo_img3.jpg'
import img4 from '../IMG/demo_img4.jpg'
import img5 from '../IMG/demo_img5.jpg'
import img6 from '../IMG/demo_img6.jpg'
import img7 from '../IMG/demo_img7.jpg'
import img8 from '../IMG/demo_img8.jpg'

import './CSS/Home.scss'


const postData = [
    {
        title: "You have to talk to someone about the same topic for 2 hours. What topic do you pick and why?",
        date: "3 days",
        author: "Junaid",
        category: "Programing",
        comments: "4",
        img: img1
    },
    {
        title: "What people think programing is vs how it actually is",
        date: "3 days",
        author: "Zahid",
        category: "Programing",
        comments: "9",
        img: img2
    },
    {
        title: "live action meme",
        date: "7 days",
        author: "Hasnat",
        category: "Meme",
        comments: "5",
        img: img5
    },
    {
        title: "Top Viewed Songs",
        date: "13 days",
        author: "Junaid",
        category: "Entertainment",
        comments: "77",
        img: img1
    },
    {
        title: "You have to talk to someone about the same topic for 2 hours. What topic do you pick and why?",
        date: "77 days",
        author: "Zulifqar",
        category: "programing",
        comments: "2",
        img: img6
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "113 days",
        author: "Shahzaib",
        category: "Meme",
        comments: "1",
        img: img8
    },
]

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Heading />

                <div className="post_section">
                    <div className="post_body">
                        {
                            postData.map((data, index) => {
                                return (
                                    <>
                                        <Post props={data} key={index} />
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="sidebar">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

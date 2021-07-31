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
        img: img1,
        comments: [
            {
                author: "Zulifqar",
                msg: "This is ammazing Topic"
            },
            {
                author: "Zahid",
                msg: " My Question is , Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Junaid",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Shahzaib",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
        ]
    },
    {
        title: "What people think programing is vs how it actually is",
        date: "3 days",
        author: "Zahid",
        category: "Programing",
        img: img2,
        comments: [
            {
                author: "Tayyab",
                msg: "The Programing is realy ......"
            },
            {
                author: "Hasnat",
                msg: "The Programing is realy ......"
            },
            {
                author: "Shahzaib",
                msg: "The Programing is realy ......"
            },
            {
                author: "Junaid",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zahid",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zulifqar",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zahid",
                msg: "The Programing is realy ......"
            },
        ]
    },
    {
        title: "live action meme",
        date: "7 days",
        author: "Hasnat",
        category: "Meme",
        img: img5,
        comments: [
            {
                author: "Zulifqar",
                msg: "This is ammazing Topic"
            },
            {
                author: "Zahid",
                msg: " My Question is , Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Junaid",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Shahzaib",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
        ]
    },
    {
        title: "Top Viewed Songs",
        date: "13 days",
        author: "Junaid",
        category: "Entertainment",
        img: img1,
        comments: [
            {
                author: "Zahid",
                msg: "Ammazing Songs"
            },
            {
                author: "Shahzaib",
                msg: "Love it"
            },
            {
                author: "Hasnat",
                msg: "Need Improvements"
            },
            {
                author: "Zahid",
                msg: "Ammazing Songs"
            },
            {
                author: "Tayyab",
                msg: "Ammazing Songs"
            },
        ]
    },
    {
        title: "You have to talk to someone about the same topic for 2 hours. What topic do you pick and why?",
        date: "77 days",
        author: "Zulifqar",
        category: "programing",
        img: img6,
        comments: [
            {
                author: "Tayyab",
                msg: "The Programing is realy ......"
            },
            {
                author: "Hasnat",
                msg: "The Programing is realy ......"
            },
            {
                author: "Shahzaib",
                msg: "The Programing is realy ......"
            },
            {
                author: "Junaid",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zahid",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zulifqar",
                msg: "The Programing is realy ......"
            },
            {
                author: "Zahid",
                msg: "The Programing is realy ......"
            },
        ]
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "113 days",
        author: "Shahzaib",
        category: "Meme",
        img: img8,
        comments: [
            {
                author: "Zulifqar",
                msg: "This is ammazing Topic"
            },
            {
                author: "Zahid",
                msg: " My Question is , Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Junaid",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                author: "Shahzaib",
                msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
        ]
    },
]

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Heading />

                <div className="post_section">
                    <div className="post_body">
                        <Post data={postData} />
                        {/* {
                            postData.map((data, index) => {
                                return (
                                    <>
                                        <Post data={data} key={index} postId={index} />
                                    </>
                                )
                            })
                        } */}
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

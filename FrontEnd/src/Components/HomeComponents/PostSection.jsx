import React from 'react'

import Img from '../../IMG/demo_img1.jpg'

import './CSS/PostSection.scss'

const PostSection = () => {
    return (
        <>
        <div className="postsection_container">
            <div className="postsection_box">
                <div className="avater">
                    <img src={Img} alt="ERROR" />
                </div>
                <div className="data">
                    <div className="title">
                        You have to talk to someone about the same topic for 2 hours. What topic do you pick and why?
                    </div>
                    <div className="submit_info">
                        submitted 3days ago by <span> chris </span> from <span> programing </span>
                    </div>
                    <div className="comment_info">
                        4 comments save
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default PostSection

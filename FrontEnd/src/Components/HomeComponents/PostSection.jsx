import React from 'react'

import Img from '../../IMG/demo_img1.jpg'

import './CSS/PostSection.scss'

const PostSection = ({ props }) => {
    return (
        <>
            <div className="postsection_container">
                <div className="postsection_box">
                    <div className="avater">
                        <img src={props.img} alt="ERROR" />
                    </div>
                    <div className="data">
                        <div className="title">
                            {props.title}
                        </div>
                        <div className="submit_info">
                            submitted {props.date} ago by <span> {props.author} </span> from <span> {props.category} </span>
                        </div>
                        <div className="comment_info">
                            {props.comments} comments save
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostSection

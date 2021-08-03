import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { withStyles, Divider, Button, TextField } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import SendIcon from '@material-ui/icons/Send';

import img1 from '../../IMG/demo_img1.jpg'
import img2 from '../../IMG/demo_img2.jpg'
import img3 from '../../IMG/demo_img3.jpg'
import img4 from '../../IMG/demo_img4.jpg'
import img5 from '../../IMG/demo_img5.jpg'
import img6 from '../../IMG/demo_img6.jpg'
import img7 from '../../IMG/demo_img7.jpg'
import img8 from '../../IMG/demo_img8.jpg'

import './CSS/PostSection.scss'




const Accordion = withStyles({
    root: {
        backgroundColor: "inherit",
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'inherit',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const MytextField = withStyles({
    root: {
        width: "100%",
        "& label": {
            fontSize: ".9rem",
        },
        '& label.Mui-focused': {
            color: '#353a40',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: "5px 0 0 5px"
            },
            '&.Mui-focused fieldset': {
                borderColor: '#353a40',
            },
        },
        "& .MuiOutlinedInput-input": {
            padding: "15px",
        },
    }
})(TextField)

const MyBtn = withStyles({
    root: {
        width: "100%",
        backgroundColor: "#007aff",
        padding: '12.5px',
        borderRadius: "0 5px 5px 0"
    }
})(Button)

const postData = [
    {
        id: "22",
        title: "you have to talk to someone about the same topic for 2 hours. What topic do you pick and why?",
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
        id: "33",
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
        id: "44",
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
        id: "55",
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
        id: "66",
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
        id: "77",
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

const PostSection = (props) => {

    const [expanded, setExpanded] = React.useState('');

    const [posts, setPosts] = useState(null)
    const [commentData, setCommentData] = useState("")

    useEffect(async () => {
        let url = "http://localhost:5000/post/allposts"

        axios.get(url)
            .then((res) => {
                console.log("All Posts =========== ", res)
                setPosts(res.data)
            }).catch((err) => {
                console.log("Error While Getting All Posts =========== ", err)
            })
    }, [])

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const enteringComment = (event) => {

        setCommentData(event.target.value)

    }
    const saveComment = (data) => {

        let newComment = {
            author: "Junaid",
            msg: commentData
        };

        setPosts((preValue) => {

            let prevComment = preValue.filter((d) => d.id == data)
            prevComment[0].comments.push(newComment)
            let newCommentArray = prevComment[0].comments

            console.log(prevComment)
            return (
                preValue.map((data) => data.id == data ? { ...data, comments: newCommentArray } : data)
            )
        })

        setCommentData("")

    }

    return (
        <>
            {
                posts == null ?
                    <>
                        <h2> No Post </h2>
                    </> :
                    // props.data.map((props, index) => {
                    posts.slice(0).reverse().map((props, index) => {
                        return (
                            <>
                                <div className="postsection_container" key={props.id}>
                                    <Accordion square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                        <div className="postsection_box">
                                            <div className="avater">
                                                <img src={props.img} alt="ERROR" />
                                            </div>
                                            <div className="data">
                                                <div className="title">
                                                    {props.title}
                                                </div>
                                                <div className="submit_info">
                                                    submitted at {props.updatedAt} by <span> {props.author} </span> from <span> {props.category} </span>
                                                </div>
                                                <div className="comment_info">
                                                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                                        {props.comments.length} comments save
                                                    </AccordionSummary>
                                                </div>
                                            </div>
                                        </div>
                                        <AccordionDetails>
                                            <div className="comments">
                                                {
                                                    props.comments.length < 1 ?
                                                        <>
                                                            <h4> No Comments Yet </h4>
                                                        </> :
                                                        props.comments.map((data, index) => {
                                                            return (
                                                                <>
                                                                    <div key={index} style={{ margin: "1rem 0 " }}>
                                                                        <h4 className="author">{data.author}</h4>
                                                                        <div className="comment">
                                                                            {data.msg}                                                            </div>
                                                                        <Divider />
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                }
                                                <div className="leave_comment">
                                                    <h4>----- LEAVE A COMMENT -----</h4>
                                                    <div className="submit_comment">
                                                        <MytextField value={commentData} onChange={enteringComment} variant="outlined" label="comment" />
                                                        <MyBtn onClick={() => saveComment(props.id)} style={{ width: "20%" }} endIcon={<SendIcon />}></MyBtn>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </>
                        )
                    })
            }
        </>
    )
}

export default PostSection

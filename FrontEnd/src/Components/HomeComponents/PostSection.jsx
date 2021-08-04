import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import { withStyles, Divider, Button, TextField, IconButton } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


import Post from './Post';

import { useSelector } from 'react-redux';

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
const MyDelIconBtn = withStyles({
    root: {
        color: "green",
        cursor: "pointer",
        "&:hover": {
            color: "red"
        }
    }
})(IconButton)


const PostSection = (props) => {

    const [expanded, setExpanded] = React.useState('');

    const [posts, setPosts] = useState(null)
    const [commentData, setCommentData] = useState("")
    const [reload, setreload] = useState(false)

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    var user = useSelector((state) => state.userData)

    const history = useHistory();

    useEffect(async () => {
        let url = "http://localhost:5000/post/allposts"

        axios.get(url)
            .then((res) => {
                setPosts(res.data)
                console.log("All Posts in USESTATE =========== ", posts)
            }).catch((err) => {
                console.log("Error While Getting All Posts =========== ", err)
            })
    }, [reload])

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const enteringComment = (event) => {

        setCommentData(event.target.value)

    }
    const saveComment = async (data) => {

        let newComment = {
            author: user.first_name,
            msg: commentData
        };

        let url = "http://localhost:5000/post/addcomment"
        await axios.post(url, { id: data, newComment: newComment })
            .then((res) => {
                console.log(" Comment SAVED IN BACKEND ===== ", res)
            }).catch((err) => {
                console.log("ERROR While Saving Comment in BackEnd", err)
            })

        setCommentData("")
        setreload((preValue) => {
            return (
                !preValue
            )
        })
    }

    const deletePost = async (data) => {
        let url = "http://localhost:5000/post/deletepost/" + data
        await axios.delete(url)
            .then((res) => {
                console.log("DELETED ==== ", res)
            }).catch((err) => {
                console.log("ERROR WHILE DELETING ==== ", err)
            })
        setreload((preValue) => {
            return (
                !preValue
            )
        })
    }

    const incriment = async (id) => {

        let url = "http://localhost:5000/post/popularadd/" + id

        let prePopular = await posts.filter((find) => find._id == id)
        let newPopular = prePopular[0].popular + 1

        await axios.patch(url, { newPopular: newPopular })
            .then((res) => {
                console.log("Popularity ADDED ==== ", res)
            }).catch((err) => {
                console.log("ERROR WHILE ADD POPULARITY ==== ", err)
            })
        setreload((preValue) => {
            return (
                !preValue
            )
        })

        // setPosts((preValue) => {
        //     return (
        //         preValue.map((index) => index._id == data ? { ...index, popular: index.popular + 1 } : index)
        //     )
        // })
    }
    const decriment = async (id) => {
        let url = "http://localhost:5000/post/popularmin/" + id

        let prePopular = await posts.filter((find) => find._id == id)
        let newPopular = prePopular[0].popular <= 1 ? prePopular[0].popular : prePopular[0].popular -1 

        await axios.patch(url, { newPopular: newPopular })
            .then((res) => {
                console.log("Popularity ADDED ==== ", res)
            }).catch((err) => {
                console.log("ERROR WHILE ADD POPULARITY ==== ", err)
            })
        setreload((preValue) => {
            return (
                !preValue
            )
        })
        // setPosts((preValue) => {
        //     return (
        //         preValue.map((index) => index._id == data ? { ...index, popular: index.popular <= 1 ? index.popular : index.popular - 1 } : index)
        //     )
        // })
    }


    return (
        <>
            {
                posts == null || posts.length < 1 ?
                    <>
                        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}> No Post </h1>
                    </> :
                    posts.slice(0).reverse().map((data, index) => {
                        console.log("The data that is send === ", data)
                        return (
                            <>
                                <div className="postsection_container" key={data._id}>
                                    <Accordion square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                        <div className="postsection_box">
                                            <div className="edit">
                                                <MyDelIconBtn onClick={handleClickOpen}> <EditIcon /> </MyDelIconBtn>
                                            </div>
                                            <div className="delete">
                                                <MyDelIconBtn onClick={() => deletePost(data._id)}> <DeleteIcon /> </MyDelIconBtn>
                                            </div>
                                            <div className="popularity" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <ArrowDropUpIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={() => incriment(data._id)} />
                                                <p> {data.popular} </p>
                                                <ArrowDropDownIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={() => decriment(data._id)} />
                                            </div>
                                            <div className="avater">
                                                <img src={data.img} alt="ERROR" />
                                            </div>
                                            <div className="data">
                                                <div className="title">
                                                    {data.title}
                                                </div>
                                                <div className="submit_info">
                                                    submitted at {data.createdAt} by <span> {data.author} </span> from <span> {data.category} </span>
                                                </div>
                                                <div className="comment_info">
                                                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                                        {data.comments.length} comments save
                                                    </AccordionSummary>
                                                </div>
                                            </div>
                                        </div>
                                        <AccordionDetails>
                                            <div className="comments">
                                                {
                                                    data.comments.length < 1 ?
                                                        <>
                                                            <h4> No Comments Yet </h4>
                                                        </> :
                                                        data.comments.map((data, index) => {
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
                                                        <MyBtn onClick={() => saveComment(data._id)} style={{ width: "20%" }} endIcon={<SendIcon />}></MyBtn>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                    <Post data={data} />
                                </Dialog>
                            </>
                        )
                    })
            }
        </>
    )
}

export default PostSection

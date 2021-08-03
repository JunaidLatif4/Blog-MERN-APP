import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import { Button, TextField, withStyles } from "@material-ui/core"
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "600px",

        "& .create": {
            fontSize: "small",
            margin: "0 1rem",

            "& span": {
                color: "#27a945",
                cursor: "pointer",
                textDecoration: "underline"
            }
        },
        "& .file": {

        }
    },
}))(MuiDialogContent);

const MytextField = withStyles({
    root: {
        width: "100%",
        "& label": {
            // fontSize: ".9rem",
        },
        '& label.Mui-focused': {
            color: '#353a40',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                // borderRadius: "5px 0 0 5px"
            },
            '&.Mui-focused fieldset': {
                borderColor: '#353a40',
            },
        },
        "& .MuiOutlinedInput-input": {
            // padding: "15px",
        },
    }
})(TextField)
const MyBtn2 = withStyles({
    root: {
        width: "100%",
        backgroundColor: "#27a945",
        padding: '12.5px',
    }
})(Button)

const Post = ({ data }) => {

    const [PostData, setPostData] = useState(data == null ? "" : data.title)
    const [file, setFile] = useState("")

    var user = useSelector((state) => state.userData)

    const history = useHistory();

    const enteringPostData = (event) => {
        setPostData(event.target.value)
    }

    const uploadImg = (event) => {
        setFile(event.target.files[0])
    }

    const sendPost = async () => {
        let url = "http://localhost:5000/post/createpost"
        // let url = "http://httpbin.org/anything"

        let data = new FormData();
        data.append("title", PostData)
        data.append("author", user.first_name)
        data.append("file", file)

        await axios.post(url
            , data
            , { withCredentials: true })
            .then((res) => {
                console.log("The Post DATA SEND ==== ", res)
                history.go(0)
            }).catch((err) => {
                console.log("ERROR IN SENDING POST DATA === ", err)
            })
    }

    const editPost = async (data) => {
        let url = "http://localhost:5000/post/editpost/" + data

        await axios.patch(url, { title: PostData })
            .then((res) => {
                console.log("POST EDIT SUCCESS === ", res)
                history.go(0)
            }).catch((err) => {
                console.log("ERROR WHILE EDITPOST ===== ", err)
            })

    }

    console.log(data)

    return (
        <>
            {
                data != null ?
                    <>
                        <DialogTitle id="customized-dialog-title" >
                            Edit Post
                        </DialogTitle>
                        <DialogContent dividers style={{ padding: "2rem 1rem" }}>
                            <MytextField onChange={enteringPostData} value={PostData} variant="outlined" label="Title" />
                            <MyBtn2 onClick={() => editPost(data._id)}> Edit Post </MyBtn2>
                        </DialogContent>
                    </> :
                    <>
                        <DialogTitle id="customized-dialog-title" >
                            Create Post
                        </DialogTitle>
                        <DialogContent dividers style={{ padding: "2rem 1rem" }}>
                            <input onChange={uploadImg} type="file" accept="image/png , image/jpeg" placeholder="Upload Img" />
                            <MytextField onChange={enteringPostData} variant="outlined" label="Title" />
                            <MyBtn2 onClick={sendPost}> Post </MyBtn2>
                        </DialogContent>
                    </>
            }
        </>
    )
}

export default Post

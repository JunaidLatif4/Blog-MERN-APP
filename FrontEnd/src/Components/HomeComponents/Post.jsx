import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import { Button, TextField, withStyles } from "@material-ui/core"
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';



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

    const [PostData, setPostData] = useState("")

    const history = useHistory()

    const enteringPostData = (event) => [
        setPostData(event.target.value)
    ]

    const sendPost = async () => {
        let url = "http://localhost:5000/post/createpost"
        await axios.post(url, {
            title: PostData,
            author: "Junaid"
        }, { withCredentials: true })
            .then((res) => {
                console.log("The Post DATA SEND ==== ", res)
                history.go(0)
            }).catch((err) => {
                console.log("ERROR IN SENDING POST DATA === ", err)
            })
    }

    console.log(data)

    return (
        <>
            <DialogTitle id="customized-dialog-title" >
                {
                    data != null ? <> Data </> :
                        <>
                            Create Post
                        </>
                }
            </DialogTitle>
            <DialogContent dividers >
                <MytextField onChange={enteringPostData} variant="outlined" label="Title" />
                <MyBtn2 onClick={sendPost}> Post </MyBtn2>
            </DialogContent>
        </>
    )
}

export default Post

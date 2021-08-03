import React, { useState } from 'react'

import Post from './Post'

import { Button, TextField, withStyles } from "@material-ui/core"
import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux'

import './CSS/SideBarSection.scss'


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

const SideBarSection = () => {

    const [open, setOpen] = React.useState(false);

    var user = useSelector((state) => state.userData)

    console.log("User with Use Selector ===== ", user)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="sidebarsection_container">
                <div className="search">
                    <MytextField variant="outlined" label=" Find a Post " />
                    <MyBtn style={{ width: "30%" }}> search </MyBtn>
                </div>
                <div className="create_post">
                    <MyBtn style={{ backgroundColor: "#27a945", borderRadius: "5px 0 0 5px" }}> New link </MyBtn>
                    {
                        user == null ?
                            <>
                                <MyBtn onClick={() => alert("Login First to Create Post")}> New post </MyBtn>
                            </> :
                            <>
                                <MyBtn onClick={handleClickOpen}> New post </MyBtn>
                            </>
                    }
                </div>
                <div className="create_category">
                    <MyBtn style={{ borderRadius: "5px" }}> Create category </MyBtn>
                </div>
                <div className="category">
                    <h3> Categories </h3>
                    <div className="categories">
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                        <p>Programing</p>
                    </div>
                </div>
            </div>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Post />
            </Dialog>
        </>
    )
}

export default SideBarSection

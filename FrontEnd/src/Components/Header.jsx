import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button, withStyles, TextField } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Logo from '../IMG/logo.png'

import './CSS/Header.scss'


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
        width: "400px",

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
            fontSize: ".9rem",
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
            padding: "15px",
        },
    }
})(TextField)
const MyBtn = withStyles({
    root: {
        backgroundColor: "#27a945",
        padding: '.5rem 2rem'
    }
})(Button)
const MyBtn2 = withStyles({
    root: {
        width: "100%",
        backgroundColor: "#007aff",
        padding: '12.5px',
    }
})(Button)



const Header = () => {

    const [open, setOpen] = React.useState(false);
    const [component, setComponent] = useState("login")

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Login = () => {
        const set = () => {
            setComponent("register")
        }
        return (
            <>
                <DialogTitle id="customized-dialog-title" >
                    Sign in
                </DialogTitle>
                <DialogContent dividers >
                    <MytextField variant="outlined" label="Email" />
                    <MytextField variant="outlined" label="Password" />
                    <p className="create"> Don't have an account <span onClick={set}> create an account </span> </p>
                    <MyBtn2> log in </MyBtn2>
                </DialogContent>
            </>
        )
    }
    const Register = () => {
        const set = () => {
            setComponent("login")
        }
        return (
            <>
                <DialogTitle id="customized-dialog-title" >
                    Sign up
                </DialogTitle>
                <DialogContent dividers >
                    <MytextField variant="outlined" label="First Name" />
                    <MytextField variant="outlined" label="Last Name" />
                    <MytextField variant="outlined" label="Email" />
                    <MytextField variant="outlined" label="Password" />
                    <p className="create"> Already have an account <span onClick={set}> Login </span> </p>
                    <MyBtn2> log in </MyBtn2>
                </DialogContent>
            </>
        )
    }
    const log = (active) => {
        switch (active) {
            case "login":
                return <Login />;
            case "register":
                return <Register />;
            default:
                return <Login />;
        }
    }

    return (
        <>
            <div className="header_container">
                <div className="header_box">

                    <NavLink to="/" className="logo">
                        <img src={Logo} alt="ERROR_LOGO" />
                        <span> Leddit </span>
                    </NavLink>

                    <nav className="nav">
                        <NavLink to="/register"> <MyBtn onClick={handleClickOpen} variant="contained"> Sign in </MyBtn> </NavLink>
                    </nav>
                </div>
            </div>

            <div className="">
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    {log(component)}
                </Dialog>
            </div>
        </>
    )
}


export default Header
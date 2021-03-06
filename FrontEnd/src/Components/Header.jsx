import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'

import { Button, withStyles, TextField, makeStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { useSelector, useDispatch } from 'react-redux'

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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


const Header = () => {

    const classes = useStyles();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [component, setComponent] = useState("login")

    var user = useSelector((state) => state.userData)

    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const ToggleMenu = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };
    const CloseMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setMenuOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenuOpen(false);
        }
    }
    const prevOpen = React.useRef(menuOpen);
    React.useEffect(() => {
        if (prevOpen.current === true && menuOpen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = menuOpen;
    }, [menuOpen]);

    const Login = () => {
        const [loginData, setLoginData] = useState({
            email: "",
            pass: "",
        })

        const set = () => {
            setComponent("register")
        }

        const enteringLoginData = (event) => {

            const { name, value } = event.target

            setLoginData((preValue) => {
                return {
                    ...preValue,
                    [name]: value
                }
            })
        }

        const login = async () => {
            let url = "http://localhost:5000/api/login";
            await axios.post(url, {
                email: loginData.email,
                password: loginData.pass
            }, { withCredentials: true })
                .then((res) => {
                    console.log(res)
                    alert("Loged IN")
                    history.go(0)

                })
                .catch((err) => {
                    console.log("Error While Login = ", err)
                    alert("Login Error")
                })
        }

        return (
            <>
                <DialogTitle id="customized-dialog-title" >
                    Sign in
                </DialogTitle>
                <DialogContent dividers >
                    <MytextField onChange={enteringLoginData} name="email" value={loginData.email} variant="outlined" label="Email" />
                    <MytextField onChange={enteringLoginData} name="pass" value={loginData.pass} type="password" variant="outlined" label="Password" />
                    <p className="create"> Don't have an account <span onClick={set}> create an account </span> </p>
                    <MyBtn2 onClick={login}> log in </MyBtn2>
                </DialogContent>
            </>
        )
    }
    const Register = () => {
        const [registerData, setRegisterData] = useState({
            fname: "",
            lname: "",
            email: "",
            pass: "",
        })
        const set = () => {
            setComponent("login")
        }

        const enteringRegisterData = (event) => {
            const { name, value } = event.target;

            setRegisterData((preValue) => {
                return {
                    ...preValue,
                    [name]: value
                }
            })
        }

        const register = async () => {
            let url = "http://localhost:5000/api/register";
            await axios.post(url, {
                first_name: registerData.fname,
                last_name: registerData.lname,
                email: registerData.email,
                password: registerData.pass
            }, { withCredentials: true })
                .then((res) => {
                    console.log(res)
                    alert("REGISTERED")
                })
                .catch((err) => {
                    console.log("Error While REGISTRATION = ", err)
                    alert("REGISTRATION ERROR")
                })
        }

        return (
            <>
                <DialogTitle id="customized-dialog-title" >
                    Sign up
                </DialogTitle>
                <DialogContent dividers >
                    <MytextField onChange={enteringRegisterData} name="fname" value={registerData.fname} variant="outlined" label="First Name" />
                    <MytextField onChange={enteringRegisterData} name="lname" value={registerData.lanme} variant="outlined" label="Last Name" />
                    <MytextField onChange={enteringRegisterData} name="email" value={registerData.email} variant="outlined" label="Email" />
                    <MytextField onChange={enteringRegisterData} name="pass" value={registerData.pass} type="password" variant="outlined" label="Password" />
                    <p className="create"> Already have an account <span onClick={set}> Login </span> </p>
                    <MyBtn2 onClick={register}> sign in </MyBtn2>
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
                        {
                            user == null ?
                                <>
                                    <NavLink to="/register"> <MyBtn onClick={handleClickOpen} variant="contained"> Sign in </MyBtn> </NavLink>
                                    <NavLink to="/songs"> <MyBtn variant="contained"> Songs </MyBtn> </NavLink>
                                    <NavLink to="/page2"> <MyBtn variant="contained"> Page 2 </MyBtn> </NavLink>
                                    <NavLink to="/page3"> <MyBtn variant="contained"> Page 3 </MyBtn> </NavLink>
                                </> :
                                <>
                                    <div className={classes.root}>
                                        <div>
                                            <Button
                                                ref={anchorRef}
                                                aria-controls={menuOpen ? 'menu-list-grow' : undefined}
                                                aria-haspopup="true"
                                                onClick={ToggleMenu}
                                                style={{ color: "white", backgroundColor: "#27a945", padding: ".5rem 1rem" }}
                                            >
                                                {user.first_name}
                                            </Button>
                                            <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={CloseMenu}>
                                                                <MenuList autoFocusItem={menuOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                    <MenuItem onClick={CloseMenu}>Profile</MenuItem>
                                                                    <MenuItem onClick={CloseMenu}>My account</MenuItem>
                                                                    <MenuItem onClick={CloseMenu}>Logout</MenuItem>
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </div>
                                    </div>
                                </>
                        }
                    </nav>
                </div>
            </div>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                {log(component)}
            </Dialog>
        </>
    )
}


export default Header;
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button, withStyles } from '@material-ui/core'

import Logo from '../IMG/logo.png'

import './CSS/Header.scss'




const MyBtn = withStyles({
    root: {
        backgroundColor: "#27a945",
        padding: '.5rem 2rem'
    }
})(Button)

const Header = () => {
    return (
        <>
            <div className="header_container">
                <div className="header_box">

                    <NavLink to="/" className="logo">
                        <img src={Logo} alt="ERROR_LOGO" />
                        <span> Beddit </span>
                    </NavLink>

                    <nav className="nav">
                        <NavLink to="/register"> <MyBtn variant="contained"> Sign in </MyBtn> </NavLink>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Header

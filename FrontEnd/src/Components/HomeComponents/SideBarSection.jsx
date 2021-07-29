import React from 'react'

import { Button, TextField, withStyles } from "@material-ui/core"

import './CSS/SideBarSection.scss'


const MytextField = withStyles({
    root: {
        width:"100%",
        "& label": {
            fontSize:".9rem",
          },
        '& label.Mui-focused': {
            color: '#353a40',
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius:"5px 0 0 5px"
            },
            '&.Mui-focused fieldset': {
                borderColor: '#353a40',
            },
        },
        "& .MuiOutlinedInput-input":{
            padding:"15px",
          },
    }
})(TextField)

const MyBtn = withStyles({
    root: {
        width:"100%",
        backgroundColor: "#007aff",
        padding: '12.5px',
        borderRadius:"0 5px 5px 0"
    }
})(Button)

const SideBarSection = () => {
    return (
        <>
            <div className="sidebarsection_container">
                <div className="search">
                    <MytextField variant="outlined" label=" Find a Post " />
                    <MyBtn style={{width:"30%"}}> search </MyBtn>
                </div>
                <div className="create_post">
                    <MyBtn style={{backgroundColor:"#27a945" , borderRadius:"5px 0 0 5px"}}> New link </MyBtn>
                    <MyBtn> New post </MyBtn>
                </div>
                <div className="create_category">
                    <MyBtn style={{borderRadius:"5px"}}> Create category </MyBtn>
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
        </>
    )
}

export default SideBarSection

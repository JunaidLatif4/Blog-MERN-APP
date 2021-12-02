import React from 'react'

import "./PlayControl.scss"

const PlayControl = () => {
    return (
        <>
            <div className="playcontrol_container">
                <div className="box">
                    <div className="controls">
                        <p> pre </p>
                        <p> play </p>
                        <p> next </p>
                    </div>
                    <div className="line"></div>
                    <div className="title">
                        Sk8er Boy
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayControl

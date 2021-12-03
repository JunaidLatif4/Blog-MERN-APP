import React from 'react'

import Pre from "../../../IMG/pre.svg"
import Next from "../../../IMG/next.svg"
import Play from "../../../IMG/play.svg"
import Pause from "../../../IMG/pause.svg"

import "./PlayControl.scss"

const PlayControl = () => {
    return (
        <>
            <div className="playcontrol_container">
                <div className="box">
                    <div className="controls">
                        <p className="p1"> <img src={Pre} alt="ERROR" /> </p>
                        <p className="p2"> <img src={Play} alt="ERROR" /> </p>
                        <p className="p3"> <img src={Next} alt="ERROR" /> </p>
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

import React from 'react'

import Sk8 from "../../IMG/sk8.jpg"

import "./MusicPlayer.scss"

const MusicPlayer = () => {
    return (
        <>
            <div className="musicplayer_container">
                <div className="nav"> <div className="logo"> PressRecord  </div> <div className="close"> X </div> </div>
                <div className="box">
                    <div className="player">
                        <div className="img_box">
                            <img src={Sk8} alt="ERROR" />
                            <div className="lines">
                                <p className="l1"><p className="l2"></p></p>
                            </div>
                            <div className="play_btn">

                            </div>
                        </div>
                    </div>
                    <div className="data">
                        <div className="heading">
                            LRA
                        </div>
                        <div className="detail">
                            This is the Song Deails
                        </div>
                        <div className="time">
                            0:00/8:41
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer

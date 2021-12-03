import React from 'react'

import Volume from "../../../IMG/volume.svg"

import "./MusicControl.scss"

const MusicControl = () => {
    return (
        <>
            <div className="musiccontrol_container">
                <div className="box">
                    <div className="length">
                        <p className="starttime">
                            0:00
                        </p>
                        <p className="divider">
                            /
                        </p>
                        <p className="lengthline">

                        </p>
                        <p className="endtime">
                            6:57
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="volume_box">
                        <img src={Volume} alt="ERROR" />
                        <div className="volume">
                            jhjhhj
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicControl

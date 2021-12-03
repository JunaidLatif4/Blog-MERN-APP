import React from 'react'

import Slider from '@mui/material/Slider';
import Volume from "../../../IMG/volume.svg"

import { changeDuration } from "../../../GlobalStates/actions/MusicActions"
import { useSelector, useDispatch } from "react-redux"

import "./MusicControl.scss"

const MusicControl = () => {
    let dispatch = useDispatch()
    let musicPlayerData = useSelector((state) => state.musicPlayerData)


    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    return (
        <>
            <div className="musiccontrol_container">
                <div className="box">
                    <div className="length">
                        <p className="starttime">
                            {
                                calculateTime(musicPlayerData.currentTime)
                            }
                        </p>
                        <p className="divider">
                            /
                        </p>
                        <p className="lengthline">
                            <Slider
                                size="small"
                                onChange={(_, value) => dispatch(changeDuration(value))}
                                max={musicPlayerData.duration}
                            />
                        </p>
                        <p className="endtime">
                            {
                                calculateTime(musicPlayerData.duration)
                            }
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="volume_box">
                        <img src={Volume} alt="ERROR" />
                        {/* <div className="volume">
                            jhjhhj
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicControl

import React, { useRef, useEffect, useState } from 'react'

import Slider from '@mui/material/Slider';

import Sk8 from "../../IMG/sk8.jpg"
import Play from "../../IMG/playblack.svg"
import Pause from "../../IMG/pauseblack.svg"
import Sk8mp3 from "../../IMG/sk8er.mp3"

import { musicPlayerAction, playSong, setDuration, changeDuration } from "../../GlobalStates/actions/MusicActions"
import { useSelector, useDispatch } from "react-redux"

import "./MusicPlayer.scss"

const MusicPlayer = () => {
    let dispatch = useDispatch()
    let musicPlayerData = useSelector((state) => state.musicPlayerData)

    // const [duration, setDuration] = useState(0)

    let audioEl = useRef()
    let animationRef = useRef()

    const playmusic = () => {
        dispatch(musicPlayerAction(true))
    }
    const pausemusic = () => {
        dispatch(musicPlayerAction(false))
    }

    useEffect(() => {

        if (musicPlayerData.play == true) {
            audioEl.current.play()
            // animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioEl.current.pause()
            // cancelAnimationFrame(animationRef.current)
        }
        audioEl.current.currentTime = musicPlayerData.currentTime

    }, [musicPlayerData])

    useEffect(() => {
        const seconds = Math.floor(audioEl.current.duration);
        dispatch(setDuration(seconds))
        // setDuration(seconds);
        // progressBar.current.max = seconds;
    }, [audioEl?.current?.loadedmetadata, audioEl?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }
    const whilePlaying = () => {
        dispatch(changeDuration(audioEl.current.currentTime))
        // changePlayerCurrentTime();
        // animationRef.current = requestAnimationFrame(whilePlaying);
    }

    return (
        <>
            <audio ref={audioEl} src={musicPlayerData.song} ></audio>
            <div className="musicplayer_container">
                <div className="nav"> <div className="logo"> PressRecord  </div> <div className="close"> X </div> </div>
                <div className="box">
                    <div className="player">
                        <div className="img_box">
                            <img src={Sk8} alt="ERROR" className="music_img" style={{ animation: musicPlayerData.play == true ? "rotateImg 50s linear" : null }} />
                            <div className="lines">
                                <p className="l1"><p className="l2"></p></p>
                            </div>
                            <div className="play_btn">
                                {
                                    musicPlayerData.play == true ?
                                        <>
                                            <span onClick={pausemusic}> <img src={Pause} alt="ERROR" /> </span>
                                        </>
                                        :
                                        <>
                                            <span onClick={playmusic}> <img src={Play} alt="ERROR" /> </span>
                                        </>
                                }
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

import React, { useRef, useEffect, useState } from 'react'

import { RiCloseLine } from "react-icons/ri"

import Slider from '@mui/material/Slider';
import Volume from "../../IMG/volume.svg"
import PlayBlack from "../../IMG/playblack.svg"
import PauseBlack from "../../IMG/pauseblack.svg"
import Pre from "../../IMG/pre.svg"
import Next from "../../IMG/next.svg"
import Play from "../../IMG/play.svg"
import Pause from "../../IMG/pause.svg"

import { musicPlayerAction, playSong } from "../../GlobalStates/actions/MusicActions"
import { useSelector, useDispatch } from "react-redux"

import "./MusicPlayer.scss"

const MusicPlayer = () => {
    let dispatch = useDispatch()
    let musicPlayerData = useSelector((state) => state.musicPlayerData)
    let songsData = useSelector((state) => state.SongsData)

    const [showPlayer, setShowPlayer] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTimeTo, setCurrentTimeTo] = useState(0);
    const [reload, setReload] = useState(false)

    const [volumeValue , setVolumeValue] = useState(100)

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
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioEl.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
        audioEl.current.currentTime = currentTime

    }, [musicPlayerData])

    useEffect(() => {
        const seconds = Math.floor(audioEl.current.duration);
        setDuration(seconds);
    }, [audioEl?.current?.loadedmetadata, audioEl?.current?.readyState]);

    useEffect(() => {
        audioEl.current.currentTime = currentTimeTo
    }, [currentTimeTo, reload])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }
    const whilePlaying = () => {
        setCurrentTime(audioEl.current.currentTime)
        // changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const nextSong = () => {
        setCurrentTime(0)
        let length = songsData.length

        let currentSong = songsData.findIndex((data) => data.title == musicPlayerData.title)

        console.log("LENGTH OF SONGS ====== ", length);
        console.log("CURRENT SONGS ====== ", currentSong);

        if (currentSong >= length - 1) {
            dispatch(playSong(songsData[0]))
        } else {
            dispatch(playSong(songsData[parseFloat(currentSong) + 1]))
        }
    }
    const preSong = () => {
        setCurrentTime(0)
        let length = songsData.length

        let currentSong = songsData.findIndex((data) => data.title == musicPlayerData.title)

        console.log("LENGTH OF SONGS ====== ", length);
        console.log("CURRENT SONGS ====== ", currentSong);

        if (currentSong <= 0) {
            dispatch(playSong(songsData[length - 1]))
        } else {
            dispatch(playSong(songsData[parseFloat(currentSong) - 1]))
        }
    }

    useEffect(() => {
        setCurrentTimeTo(0)
        setReload(reload ? false : true)
    }, [musicPlayerData.song])

    useEffect(()=>{
        audioEl.current.volume = volumeValue /100
    },[volumeValue])

    const showPlayerDiv = () => {
        setShowPlayer(true)
    }
    const closePlayer = () => {
        setShowPlayer(false)
    }

    console.log("Currenttime ===== ", currentTime);

    return (
        <>
            <audio ref={audioEl} src={musicPlayerData.song} ></audio>
            <div className="musicplayer_container" style={{ display: showPlayer ? null : "none" }}>
                <div className="nav"> <div className="logo"> PressRecord  </div> <div className="close" onClick={closePlayer}> <RiCloseLine /> </div> </div>
                <div className="box">
                    <div className="player">
                        <div className="img_box">
                            <img src={musicPlayerData.img} alt="ERROR" className={`music_img ${musicPlayerData.play == true ? "start_rotate" : null}`} />
                            <div className="lines">
                                <p className="l1"><p className="l2"></p></p>
                            </div>
                            <div className="play_btn">
                                {
                                    musicPlayerData.play == true ?
                                        <>
                                            <span onClick={pausemusic}> <img src={PauseBlack} alt="ERROR" /> </span>
                                        </>
                                        :
                                        <>
                                            <span onClick={playmusic}> <img src={PlayBlack} alt="ERROR" /> </span>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="data">
                        <div className="heading">
                            {musicPlayerData.title}
                        </div>
                        <div className="detail">
                            {musicPlayerData.detail}
                        </div>
                        <div className="time">
                            {calculateTime(currentTime)} / {calculateTime(duration)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="playcontrol_container" style={{ display: musicPlayerData.show ? null : "none" }}>
                <div className="box">
                    <div className="controls">
                        <p className="p1" onClick={preSong}> <img src={Pre} alt="ERROR" />  </p>
                        {
                            musicPlayerData.play == true ?
                                <p className="p2" onClick={pausemusic}> <img src={Pause} alt="ERROR" /> </p>
                                :
                                <p className="p2" onClick={playmusic}> <img src={Play} alt="ERROR" /> </p>
                        }
                        <p className="p3" onClick={nextSong}> <img src={Next} alt="ERROR" /> </p>
                    </div>
                    <div className="line"></div>
                    <div className="title" onClick={showPlayerDiv}>
                        {musicPlayerData.title.length > 16 ? `${musicPlayerData.title.slice(0, 15)}...` : musicPlayerData.title}
                    </div>
                </div>
            </div>

            <div className="musiccontrol_container" style={{ display: duration > "0" ? null : "none" }}>
                <div className="box">
                    <div className="length">
                        <p className="starttime">
                            {
                                calculateTime(currentTime)
                            }
                        </p>
                        <p className="divider">
                            /
                        </p>
                        <p className="lengthline">
                            <Slider
                                size="small"
                                value={currentTime}
                                onChange={(_, value) => setCurrentTimeTo(value)}
                                max={duration}
                            />
                        </p>
                        <p className="endtime">
                            {
                                calculateTime(duration)
                            }
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="volume_box">
                        <img src={Volume} alt="ERROR" />
                        <div className="volume">
                        <Slider
                                size="small"
                                value={volumeValue}
                                onChange={(_, value) => setVolumeValue(value)}
                                max={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer

import React from 'react'

import Pre from "../../../IMG/pre.svg"
import Next from "../../../IMG/next.svg"
import Play from "../../../IMG/play.svg"
import Pause from "../../../IMG/pause.svg"

import { musicPlayerAction, playSong } from "../../../GlobalStates/actions/MusicActions"
import { useSelector, useDispatch } from 'react-redux'

import "./PlayControl.scss"

const PlayControl = (props) => {
    let dispatch = useDispatch()
    let musicPlayerData = useSelector((state) => state.musicPlayerData)
    let songsData = useSelector((state) => state.SongsData)

    const playmusic = () => {
        dispatch(musicPlayerAction(true))
    }
    const pausemusic = () => {
        dispatch(musicPlayerAction(false))
    }

    const showPlayer = () => {
        props.setShowPlayer(true)
    }

    const nextSong = () => {
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

    return (
        <>
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
                    <div className="title" onClick={showPlayer}>
                        {musicPlayerData.title.length > 16 ? `${musicPlayerData.title.slice(0, 15)}...` : musicPlayerData.title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayControl

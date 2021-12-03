import React from 'react'

import { playSong } from "../../GlobalStates/actions/MusicActions"
import { useSelector, useDispatch } from 'react-redux'

import "./Songs.scss"


const Songs = () => {
    let dispatch = useDispatch()
    let songsData = useSelector((state) => state.SongsData)

    const playMusic = (data) => {
        dispatch(playSong(data))
    }

    return (
        <>
            {
                songsData &&
                <>
                    <div className="songs_container">
                        <div className="box">
                            <div className="heading">
                                Songs List
                            </div>
                            <div className="data">
                                {
                                    songsData.map((data, index) => {
                                        return (
                                            <>
                                                <div className="song" onClick={() => playMusic(data)}>
                                                    <div className="number"> {index + 1} </div>
                                                    <div className="img_box"> <img src={data.img} alt="ERROR" /> </div>
                                                    <div className="title"> {data.title} </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Songs

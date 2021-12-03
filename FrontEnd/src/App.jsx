import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Components/Header'
import Home from './Components/Home'

import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './GlobalStates/actions'

import './CSS/App.scss'
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';
import PlayControl from './Components/MusicPlayer/Components/PlayControl';
import MusicControl from './Components/MusicPlayer/Components/MusicControl';
import Songs from './Components/Songs/Songs';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

const App = () => {

  const dispatch = useDispatch();
  let musicPlayerData = useSelector((state) => state.musicPlayerData)

  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(async () => {
    let url = "http://localhost:5000/api/getuser"
    await axios.post(url, {

    }, { withCredentials: true })
      .then((res) => {
        console.log("The User DATA = ", res)
        dispatch(addUser(res.data.User))
      }).catch((err) => {
        console.log("ERROR While Geting User Data == ", err)
      })


  }, [])

  const HomeComponent = () => {
    return (
      <>
        <Header />
        <Home />
      </>
    )
  }

  return (
    <>
      <PlayControl setShowPlayer={setShowPlayer} />
      <MusicControl />
      <MusicPlayer showPlayer={showPlayer} setShowPlayer={setShowPlayer} />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/music" component={MusicPlayer} />
        <Route path="/songs" component={Songs} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>

    </>
  )
}

export default App;

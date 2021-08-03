import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Components/Header'
import Home from './Components/Home'

import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './GlobalStates/actions'

import './CSS/App.scss'

const App = () => {

  const dispatch = useDispatch();

  useEffect(async () => {
    let url = "http://localhost:5000/api/getuser"
    await axios.post(url , {

    }, { withCredentials: true })
      .then((res) => {
        console.log("The User DATA = ", res)
        dispatch(addUser(res.data.User))
      }).catch((err) => {
        console.log("ERROR While Geting User Data == ", err)
      })


  }, [])

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App;

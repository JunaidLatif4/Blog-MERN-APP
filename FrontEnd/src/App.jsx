import React ,{useEffect} from 'react'
import { Switch , Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'

import { useSelector , useDispatch } from 'react-redux'
import { addUser } from './GlobalStates/actions'

import './CSS/App.scss'

const App = () => {


  return (
    <>
  <Header/>
  <Home/>
    </>
  )
}

export default App;

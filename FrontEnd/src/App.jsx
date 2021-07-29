import React from 'react'
import { Switch , Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'

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

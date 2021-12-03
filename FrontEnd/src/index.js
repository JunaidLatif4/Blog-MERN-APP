import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

// GlobalStates
import { Provider } from 'react-redux'
import globalData from './GlobalStateStore';
globalData.subscribe(() => console.log("The Subscribe = ", globalData.getState()))


ReactDOM.render(
  <BrowserRouter>
    <Provider store={globalData}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
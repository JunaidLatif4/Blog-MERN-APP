import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

// GlobalStates
import { Provider } from 'react-redux'
import userData from './GlobalStateStore';
userData.subscribe(() => console.log("The Subscribe = ", userData.getState()))


ReactDOM.render(
  <BrowserRouter>
    <Provider store={userData}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
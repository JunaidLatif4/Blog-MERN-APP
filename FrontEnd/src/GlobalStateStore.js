import { createStore } from 'redux';

import allReducers from './GlobalStates/reducers/index';



const userData = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default userData;


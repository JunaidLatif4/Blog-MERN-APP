import userData from "./UserProfile";
import musicPlayerData from "./MusicReducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    userData,
    musicPlayerData
})

export default allReducers;
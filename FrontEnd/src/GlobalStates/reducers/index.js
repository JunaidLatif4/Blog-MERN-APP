import userData from "./UserProfile";
import musicPlayerData from "./MusicReducer"
import SongsData from "./Songs"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    userData,
    musicPlayerData,
    SongsData
})

export default allReducers;
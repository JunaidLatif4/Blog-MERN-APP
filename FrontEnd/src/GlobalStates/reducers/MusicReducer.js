var initialState = {
    play: false,
    song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638515973/sk8er_ynmlha.mp3",
    duration: "0",
    currentTime: "0"
};

const musicControlData = (state = initialState, action) => {
    switch (action.type) {
        case "CONTROL":
            let data = action.data
            return (
                state = {
                    ...state,
                    play: data
                }
            )
        case "PLAY":
            let song = action.data
            return (
                state = {
                    ...state,
                    song: song,
                }
            )
        case "SET":
            let duration = action.data
            return (
                state = {
                    ...state,
                    duration: duration,
                }
            )
        case "CHANGE":
            let changeDuration = action.data
            return (
                state = {
                    ...state,
                    currentTime: changeDuration,
                }
            )

        default: return state
    }
}


export default musicControlData;
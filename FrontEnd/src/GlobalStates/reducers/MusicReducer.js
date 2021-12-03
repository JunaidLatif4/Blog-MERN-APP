var initialState = {
    play: false,
    song: "",
    duration: "0",
    currentTime: "0",
    title: "",
    detail: "",
    img: "",
    show: false
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
            let songData = action.data
            return (
                state = {
                    ...state,
                    song: songData.song,
                    title: songData.title,
                    detail: songData.detail,
                    img: songData.img,
                    play: true,
                    show: true
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
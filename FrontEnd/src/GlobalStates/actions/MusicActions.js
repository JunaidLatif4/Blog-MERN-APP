const musicPlayerAction = (data) => {
    return {
        type: "CONTROL",
        data: data
    }
}
const playSong = (data) => {
    return {
        type: "PLAY",
        data: data
    }
}
const setDuration = (data) => {
    return {
        type: "SET",
        data: data
    }
}
const changeDuration = (data) => {
    return {
        type: "CHANGE",
        data: data
    }
}


export { musicPlayerAction , playSong , changeDuration , setDuration };
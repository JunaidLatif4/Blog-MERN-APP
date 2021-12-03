var initialState = [
    {
        title: 'Sk8er Boy',
        detail: "By Avril Lavigne",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638515973/sk8er_ynmlha.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553486/sk8_y4k56a.jpg"
    },
    {
        title: "Here's To Never Growing Up",
        detail: "By Avril Lavigne",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638516067/here_okzvyx.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553486/here_wsfeq4.jpg"
    },
    {
        title: "Sugar",
        detail: "By Maroon 5",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638552631/sugar_v3308x.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553487/sugar_kmkvru.jpg"
    },
    {
        title: "Uptown Funk",
        detail: "By Mark Ronson",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638552649/uptown_t0jcso.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553487/uptown_amlgqj.jpg"
    },
    {
        title: "Counting Stars",
        detail: "By OneRepublic",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638552589/counting_smxzok.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553486/counting_gixuss.jpg"
    },
    {
        title: "Let Her Go",
        detail: "By Passenger",
        song: "https://res.cloudinary.com/junaidcloud/video/upload/v1638552614/pessenger_ezhvi6.mp3",
        img: "https://res.cloudinary.com/junaidcloud/image/upload/v1638553486/let_her_go_h5ihwg.jpg"
    }
]

const SongsData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SONGS":
            let data = action.data
            return (
                state = data
            )

        default: return state
    }
}


export default SongsData;
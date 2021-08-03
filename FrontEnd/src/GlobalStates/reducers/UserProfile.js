var initialState = [];

const userData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return (
                state = [action.data]
            )

        default: return state
    }
}


export default userData;
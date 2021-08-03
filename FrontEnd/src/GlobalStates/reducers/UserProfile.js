var initialState = null;

const userData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            let data = action.data
            return (
                state = data
            )

        default: return state
    }
}


export default userData;
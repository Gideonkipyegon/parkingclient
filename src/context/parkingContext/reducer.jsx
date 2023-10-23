const Reducer = (state, action) => {
    switch (action.type) {
        case "HOME":
            return {
                ui: action.payload
            }
        case "ADMIN":
            return {
                ui: action.payload
            }
        case "REPORTS":
            return {
                ui: action.payload
            }
        case "TRANSACTION":
            return {
                ui: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;
const initialState = {
    // allTask: null,
    alertMessage: { open: false, title: '', message: '', alertType: '' }
}
export const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALERT_MESSAGE":
            return { ...state, alertMessage: action.payload };
        default: return state

    }
}
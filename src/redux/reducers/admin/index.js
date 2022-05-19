const initialState = {
    // allTask: null,
    usermanagmentList: []
}
export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_BY_ADMIN":
            return { ...state, usermanagmentList: action.payload };
        default: return state

    }
}
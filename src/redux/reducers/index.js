import { combineReducers } from "redux";
import { AdminReducer } from "./admin";

const mainReducer = combineReducers({
    AdminReducer: AdminReducer
})

export default mainReducer
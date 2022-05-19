import { combineReducers } from "redux";
import { LoginReducer } from './login'
import { AlertReducer } from './alertMessage'
import { AdminReducer } from "./admin";

const mainReducer = combineReducers({
    LoginReducer: LoginReducer,
    AlertReducer: AlertReducer,
    AdminReducer: AdminReducer
})

export default mainReducer
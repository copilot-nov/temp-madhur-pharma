import { combineReducers } from "redux";
import { LoginReducer } from './login'
import { AlertReducer } from './alertMessage'

const mainReducer = combineReducers({
    LoginReducer: LoginReducer,
    AlertReducer: AlertReducer
})

export default mainReducer
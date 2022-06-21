import { combineReducers } from "redux";
import { AdminReducer } from "./admin";
import { ProductionReducer } from "./production";

const mainReducer = combineReducers({
    ProductionReducer:ProductionReducer,
    AdminReducer: AdminReducer
})

export default mainReducer
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const allReducers = combineReducers({
    contact:contactReducer
})

export default allReducers;
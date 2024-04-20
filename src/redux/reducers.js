import operationsReducer from "./todoApp/todoReducer/operations";
import {combineReducers} from "redux";
// reducers.js
export const reducers = combineReducers({
    operationsReducer,
})
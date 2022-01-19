import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {buttonReduxReducer} from "./buttonRedux";
import {photosReducer} from "./photos";

export const rootReducer = combineReducers({
    counterReducer,
    buttonReduxReducer,
    photosReducer
})
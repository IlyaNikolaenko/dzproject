import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {buttonReduxReducer} from "./buttonRedux";
import {photosReducer} from "./photos";
import {postsReducer} from "./posts";

export const rootReducer = combineReducers({
    counterReducer,
    buttonReduxReducer,
    photosReducer,
    postsReducer
})
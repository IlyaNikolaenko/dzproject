import {createStore, combineReducers} from "redux";
import {counterReducer} from "./reducers/counter";
import {buttonReduxReducer} from "./reducers/buttonRedux";

const reducers = combineReducers({
    counterReducer,
    buttonReduxReducer
})
export const store = createStore(reducers);

import {GREEN, RED, BLUE} from "../constants";


export const buttonReduxReducer = (state = {bg: 0}, action) => {
    switch (action.type) {
        case BLUE: {
            return {bg: "blue"};
        }
        case RED: {
            return {bg: "red"};
        }
        case GREEN: {
            return {bg: "green"};
        }
        default: {
            return state;
        }
    }
}
import {PHOTOS_LOADING, GET_PHOTOS_ERROR, GET_PHOTOS_SUCCESS} from "../constants";

const defaultValues = {
    isLoading: false,
    photos: []
};

export const photosReducer = (state = defaultValues, action) => {
    switch (action.type){
        case PHOTOS_LOADING: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_PHOTOS_SUCCESS: {
            return {
                isLoading: false,
                photos: action.payload
            };
        }
        case GET_PHOTOS_ERROR: {
            return {
                ...state,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}
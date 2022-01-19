import {PHOTOS_LOADING, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR} from "../constants";

const getPhotosPending = () => ({type: PHOTOS_LOADING});
const getPhotosSuccess= (data) => ({type: GET_PHOTOS_SUCCESS, payload: data});
const getPhotosError = () => ({type: GET_PHOTOS_ERROR});

export const getPhotos = () => {
    return (dispatch) => {
        dispatch(getPhotosPending());
        fetch("http://jsonplaceholder.typicode.com/photos")
            .then((data) => data.json())
            .then((result) => dispatch(getPhotosSuccess(result.slice(0, 10))))
            .catch(() => dispatch(getPhotosError()));
    };
};
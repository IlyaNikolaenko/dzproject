import {POSTS_LOADING, GET_POSTS_ERROR, GET_POSTS_SUCCESS} from "../constants";

const getPostsPending = () => ({type: POSTS_LOADING});
const getPostsSuccess= (data) => ({type: GET_POSTS_SUCCESS, payload: data});
const getPostsError = () => ({type: GET_POSTS_ERROR});

export const getPosts = () => {
    return (dispatch) => {
        dispatch(getPostsPending());
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((result) => dispatch(getPostsSuccess(result)))
            .catch(() => dispatch(getPostsError()));
    };
};
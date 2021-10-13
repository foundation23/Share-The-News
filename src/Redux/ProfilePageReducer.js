import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'OK'},
        {id: 2, post: 'Nice to Meet you'},
        {id: 3, post: 'My name is Maks'}
    ],
    profile: null,
    status: "",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: newPost}]
            }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
            dispatch(setUserProfile(response.data));
    }
}
    export const getStatus = (userId) => {
        return async (dispatch) => {
            let response = await profileAPI.getStatus(userId);
                    dispatch(setStatus(response.data));
        }
    }
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
    }
}}
export default profileReducer;
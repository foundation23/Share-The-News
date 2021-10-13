import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initialixedSuccess = () => ({
    type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(()=> {
        dispatch(initialixedSuccess())
    })
}

export default AppReducer;
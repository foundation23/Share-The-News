import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./ProfilePageReducer";
import dialogReduser from "./DialogPageReducer";
import usersReduser from "./UsersPageReduser";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReduser,
    UsersPage: usersReduser,
    auth: AuthReducer,
    app: AppReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;
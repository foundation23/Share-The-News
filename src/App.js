import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))
const Settings = React.lazy(() => import("./components/Settings/Settings"))
const Music = React.lazy(() => import("./components/Music/Music"))
const News = React.lazy(() => import("./components/News/News"))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized){
        return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/Dialogs' render={withSuspense(Dialogs)}/>
                    <Route path='/News' render={withSuspense(News)}/>
                    <Route path='/Users' render={withSuspense(UsersContainer)}/>
                    <Route path='/Music' render={withSuspense(Music)}/>
                    <Route path='/Settings' render={withSuspense(Settings)}/>
                    <Route path='/Login' render={withSuspense(Login)}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);

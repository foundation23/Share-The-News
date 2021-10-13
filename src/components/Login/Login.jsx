import React from 'react';
import LoginForm from "../../forms/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import Redirect from "react-router-dom/es/Redirect";

const Login = (props) => {
    const onSubmit = (values, setStatus) => {
        setStatus(undefined);
props.login(values.email, values.password, values.rememberMe, setStatus)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Authentication</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect  (mapStateToProps, {login}) (Login);
import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={h.Header}>
        <div className={h.textLogo}>Share The News
        </div>
        <div className={h.Account}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={"/login"}>Login</NavLink>}
        </div>
        <div className={h.Search}>
            <textarea>Search</textarea>
        </div>
    </header>
}
export default Header;
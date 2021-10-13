import React from 'react';
import n from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {ImHome, ImEnvelop, ImUserCheck, ImNewspaper, ImUsers, ImPlay3, ImWrench } from "react-icons/im";

const Navigation = (props) => {

    return <div className={n.Navigation}>

        <div className={n.item}>
            <NavLink to="/Profile" activeClassName={n.activeLink}><ImHome />Profile</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/Dialogs" activeClassName={n.activeLink}><ImEnvelop />Dialogs</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/Friends" activeClassName={n.activeLink}><ImUserCheck />Friends</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/News" activeClassName={n.activeLink}><ImNewspaper />News</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/Users" activeClassName={n.activeLink}><ImUsers />Users</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/Music" activeClassName={n.activeLink}><ImPlay3 />Music</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/Settings" activeClassName={n.activeLink}><ImWrench />Settings</NavLink>
        </div>
    </div>
}
export default Navigation;

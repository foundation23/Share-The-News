import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow, onPageChanged, ...props}) => {

    return (
    <div className={style.item}>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img
                    src={user.photos.small != null ? user.photos.small : 'https://thumbnailer.mixcloud.com/unsafe/900x900/profile/3/3/4/1/dd88-4c9d-4e67-a67e-d9f795a03e5d.jpg'}
                    className={style.avatar}/>
            </NavLink>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}> UNFOLLOW</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>FOLLOW</button>
                }
            </div>
        </div>
        <div className={style.information}>
            {user.name}
        </div>
    </div>
    )}
    export default User;
import React from 'react';
import av from './AvatarInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const AvatarInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={av.AvatarInfo}>
        <div className={av.avatar}>
            <img src={props.profile.photos.large}/>
        </div>

        <div className={av.Info}>
            <a>Name: {props.profile.fullName}</a><br></br>
            <a>Age:</a><br></br>
            <a>From:</a><br></br>
            <a>Marital status:</a><br></br>
            <a>Education:</a>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
};
export default AvatarInfo;
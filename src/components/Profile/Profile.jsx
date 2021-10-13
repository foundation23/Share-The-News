import React from 'react';
import p from './Profile.module.css';
import Topic from './Topic/Topic';
import AvatarInfo from './AvatarInfo/AvatarInfo';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import NewsProfile from "./NewsProfile/NewsProfile";

const Profile = (props) => {
    return <div className={p.Profile}>
        <Topic profile={props.profile}/>
        <AvatarInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
        <NewsProfile />
    </div>
}
export default Profile;
import React from 'react';
import t from './Topic.module.css';
import topic from "./Topic.jpg";
import FriendsContainer from "./Friends/FriendsContainer";


const Topic = (props) => {
    return <div className={t.topic}>
        <div className={t.topicPicture}>
            <img src={topic}></img>
        </div>
        <FriendsContainer store={props.profile}/>

    </div>
};
export default Topic;
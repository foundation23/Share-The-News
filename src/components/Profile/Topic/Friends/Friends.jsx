import React from 'react';
import f from './Friends.module.css';


const FriendItem = (props) => {
    let path = "/Friends/" + " " + props.id;
    return <div className={FriendItem}>
        < div to={path}>{props.logo}</div>
    </div>;
};
const Friends = (props) => {

    let FriendElement = props.friends.map(f => <FriendItem name={f.name} id={f.id} key={f.id} logo={f.logo}/>)

    return <div className={f.Friends}>
        {FriendElement}

    </div>
}
export default Friends;
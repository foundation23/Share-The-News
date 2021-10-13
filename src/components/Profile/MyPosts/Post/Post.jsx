import React from 'react';
import p from './Post.module.css';

const PostsItem = (props) => {

    return <div className={p.post}>{props.post}</div>
}

const Post = (props) => {

    let PostElements =
        props.posts.map(pr => <PostsItem post={pr.post} key={pr.id} id={pr.id}/>);

    return <div className={p.Post}>
        {PostElements}
    </div>
}
export default Post;

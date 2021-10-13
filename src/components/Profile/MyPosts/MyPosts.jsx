import React from 'react';
import m from './MyPosts.module.css';
import Post from "./Post/Post";
import MyNewPostForm from "../../../forms/MyNewPostForm";

const MyPosts = (props) => {

    let AddNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div className={m.MyPosts}>
        <div>
            New Post
            <MyNewPostForm AddNewPost={AddNewPost}/>
        </div>
        <div className={m.title}>
            My posts
        </div>
        <div>
            <Post posts={props.posts}/>
        </div>
    </div>
}

export default MyPosts;
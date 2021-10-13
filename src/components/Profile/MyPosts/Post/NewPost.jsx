import React from 'react';
import {useFormik} from "formik";

const NewPost = (props) => {
    const MyPostForm = useFormik({
        initialValues: {
            newPost: '',
        },
        onSubmit: values => {
            props.onAddPost(values);
        },
    });

    return (<div>
        <form onSubmit={MyPostForm.handleSubmit}>
            <label htmlFor="post">New post</label>
        <div>
            <input
                placeholder="New post"
                id="newPost"
                name="newPost"
                type="text"
                onChange={MyPostForm.handleChange}
                value={MyPostForm.values.newPost}
            />
        </div>
        <div>
            <button type="submit">publish</button>
        </div>
    </form>
</div>
)}

export default NewPost;
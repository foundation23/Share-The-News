import {Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

const validate = Yup.object().shape({
    newPostText: Yup.string()
        .max(50, 'Too Long!')
        .required('Required')
});

const MyNewPostForm = (props) => (
    <div>
        <Formik
            initialValues={{ newPostText: '' }}
            validationSchema={validate}
            onSubmit={values => {
                props.AddNewPost(values);
            }}
        >
            {({ errors, touched}) => (
                <Form >
                    < Field type="text" name="newPostText" />
                    {touched.newPostText && errors.newPostText && <div>{errors.newPostText}</div>}
                    < button type="submit" >
                        Publish
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);
export default MyNewPostForm;
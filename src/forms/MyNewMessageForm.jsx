import {Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

const validate = Yup.object().shape({
    newMessageText: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
});

const MyNewMessageForm = (props) => (
    <div>
        <Formik
            initialValues={{ newMessageText: '' }}
            validationSchema={validate}
            onSubmit={values => {
                props.addNewMessage(values);
            }}
        >
            {({ errors, touched}) => (
                <Form >
                    < Field type="text" name="newMessageText" />
                    {touched.newMessageText && errors.newMessageText && <div>{errors.newMessageText}</div>}
                    < button type="submit" >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);
export default MyNewMessageForm;
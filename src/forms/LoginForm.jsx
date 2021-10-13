import {Field, Form, Formik, status} from "formik";
import React from "react";
import * as Yup from 'yup';

const validate = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
});

const LoginForm = (props) => (

    <div>
        <Formik
            initialValues={{ email: '',
                password: '',
                rememberMe: '',
            }}
            validationSchema={validate}
            onSubmit={(values, {setStatus}) => {
                props.onSubmit(values, setStatus);
            }}
        >
            {({ errors, touched, status}) => (
                <Form >
                    <div>
                    < Field name="email" type="email" placeholder="email"/>
                    {touched.email && errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                    < Field name="password" type="password" placeholder="password"/>
                    {touched.password && errors.password && <div>{errors.password}</div>}
                    </div>
                    <div>{status}</div>
                    <div>
                    < Field type="checkbox" name="rememberMe" />
                    Remember Me
                    </div>
                    < button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>);

export default LoginForm;
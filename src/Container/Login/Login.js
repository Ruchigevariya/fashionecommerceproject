import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgotPasswordAction, googleSignInAction, signInAction, signUpAction } from '../../redux/action/auth.action';

function Login(props) {
    const [usertype, setUserType] = useState('login')
    const [reset, setReset] = useState('false')

    let schemaObj, initval;

    if (reset === 'true') {
        schemaObj = {
            email: yup.string().required("please enter email id").email("please enter valid email id"),
        }
        initval = {
            email: '',
        }
    } else if (usertype === 'login') {
        schemaObj = {
            email: yup.string().required("please enter email id").email("please enter valid email id"),
            password: yup.string().required("please enter password"),
        }
        initval = {
            email: '',
            password: '',
        }
    } else if (usertype === 'signup') {
        schemaObj = {
            name: yup.string().required("please enter name"),
            email: yup.string().required("please enter email id").email("please enter valid email id"),
            password: yup.string().required("please enter password"),
        }
        initval = {
            name: '',
            email: '',
            password: '',
        }
    }

    let schema = yup.object().shape(schemaObj);

    const dispatch = useDispatch()

    const handleData = (values) => {
        console.log(values);
        // let localData = JSON.parse(localStorage.getItem("user"));

        // if(localData === null){
        //     localStorage.setItem("user",JSON.stringify([values]))
        // }else{
        //     localData.push(values);
        //     localStorage.setItem("user",JSON.stringify(localData))
        // }

        dispatch(signUpAction(values))
    }

    const handleLogin = (values) => {
        // localStorage.setItem("user",123)

        dispatch(signInAction(values))
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAction())
    }

    const formikObj = useFormik({
        initialValues: initval,
        validationSchema: schema,
        onSubmit: values => {
            if (usertype === 'login' && reset === 'false') {
                handleLogin(values);
            } else if(usertype === 'signup' && reset === 'false'){
                
                handleData(values);
            } else{
                dispatch(forgotPasswordAction(values))
            }
            // alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === 'true' ?
                                <h2>Forgot password</h2>
                                :
                                usertype === 'login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formikObj}>
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                            {
                                reset === 'true' ?
                                    null
                                    :
                                    usertype === 'login' ?
                                        null
                                        :
                                        <div className="row">
                                            <div className="col-md-4 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                            </div>
                                        </div>
                            }

                            <div className='row'>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur} />
                                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                                </div>
                            </div>

                            {
                                reset === 'true' ?
                                    null :
                                    <div className='row'>
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} />
                                            <p>{errors.password && touched.password ? errors.password : ''}</p>
                                        </div>
                                    </div>
                            }

                            {
                                reset === 'true' ?
                                    <div className="text-center"><button type="submit">Submit</button></div>
                                    :
                                    usertype === 'login' ?
                                        <div className="text-center "><button type="submit">Login</button></div>
                                        :
                                        <div className="text-center"><button type="submit">Signup</button></div>
                            }

                            {
                                reset === 'true' ?
                                    null
                                    :
                                    usertype === 'login' ?
                                        <div className='row mx-auto text-center'>
                                            <p className='text-center mx-auto col-12 my-3 login'>OR</p>
                                            <div className="mx-auto"><button type="submit" onClick={() => {handleGoogleSignIn()}}>signIn Google</button></div>
                                        </div>
                                    :
                                    null
                            }
                            {
                                usertype === 'login' ?
                                    <div className="text-center mt-3 mb-3">create a new account <a onClick={() => { setReset('false'); setUserType('signup') }}>signup</a></div>
                                    :
                                    <div className="text-center mt-3 mb-3">already have an account <a onClick={() => { setReset('false'); setUserType('login') }}>Login</a></div>
                            }
                            <div className='text-center' onClick={() => setReset('true')}>forgot password</div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>
    );
}

export default Login;
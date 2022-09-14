import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginForm = () => {

    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN_USER);

    // useEffect(() => {
    //     if (error) {
    //         setShowAlert(true)
    //     } else {
    //         setShowAlert(false)
    //     }
    // });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData }
            })
            console.log(data)
            Auth.login(data.login.token)
        } catch (error) {
            console.error(error);

        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div className="container login mb-153">
                <div className='row py-5 form-bg'>
                    <h1 className='mb-3'>Login to BricksRepo</h1>
                    <p>Don't have a user account? <Link to="/SignupForm" className='blue'>Sign up</Link> for one now.</p>
                    <div className='col-7'>
                        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your login credentials!
                            </Alert>
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your email'
                                    name='email'
                                    onChange={handleInputChange}
                                    value={userFormData.email}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Your password'
                                    name='password'
                                    onChange={handleInputChange}
                                    value={userFormData.password}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                disabled={!(userFormData.email && userFormData.password)}
                                type='submit'
                                variant='success'>
                                Submit
                            </Button>
                        </Form>


                        {/* <form onSubmit={""} className="needs-validation" novalidate>
                            <label>Username or email address</label>
                            <input
                                type='text'
                                name='search_sets'
                                class='form-control form-control-lg mb-3'
                                placeholder='Username or email address'
                                value={""}
                                onChange={"handleChange"}
                                required
                            />
                            <label>Password</label>
                            <input
                                type='password'
                                name='search_sets'
                                class='form-control form-control-lg'
                                placeholder='Password'
                                value={""}
                                onChange={"handleChange"}
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email.
                            </div>

                            <button type="submit" class="btn btn-blue mt-3">Search</button>

                        </form> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
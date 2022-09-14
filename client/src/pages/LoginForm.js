import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <div className="container login mb-153">
                <div className='row py-5 form-bg'>
                    <h1 className='mb-3'>Login to BricksRepo</h1>
                    <p>Don't have a user account? <Link to="/SignupForm" className='blue'>Sign up</Link> for one now.</p>
                    <div className='col-7'>
                        <form onSubmit={""} className="needs-validation" novalidate>
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

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
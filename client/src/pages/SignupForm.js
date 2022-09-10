import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    return (
        <>
            <div className="container signup mb-153">
                <div className='row py-5 form-bg'>
                    <h1 className='mb-3'>Sign up to BricksRepo</h1>
                    <p>When you join us you'll be able to</p>
                    <p>
                    <ul>
                        <li>Record your LEGO collections and wanted lists</li>
                        <li>Save instructions manuals</li>
                        <li>Enjoy the site free of advertising</li>
                    </ul>
                    </p>
                    <p>Joining is FREE and we will not use your email address for anything other than managing your account.</p>

                    <p>Simply choose a username and enter your email address in the form below and we'll send you an email with a password.</p>
                <p>Already have an account? <Link to="/LoginForm" className='blue'>Log in</Link>.</p>
                <div className='col-7 mt-3'>
                <h2 className='mb-3'>Your details</h2>
                    <form onSubmit={""} className="needs-validation" novalidate>
                        <label>Choose a username</label>
                        <input
                            type='text'
                            name='search_sets'
                            class='form-control form-control-lg mb-3'
                            placeholder='Username'
                            value={""}
                            onChange={"handleChange"}
                            required
                        />
                        <label>Email address</label>
                        <input
                            type='text'
                            name='search_sets'
                            class='form-control form-control-lg mb-3'
                            placeholder='Email address'
                            value={""}
                            onChange={"handleChange"}
                            required
                        />
                        <label>Password</label>
                        <input
                            type='text'
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

                        <button type="submit" class="btn btn-blue mt-3">Sign up</button>

                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignupForm;
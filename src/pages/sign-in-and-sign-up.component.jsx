import React from 'react';
import SignIn from '../components/auth/sign-in.component';
import SignUp from '../components/auth/sign-up-component';

const SignInAndSignUpPage = () => (
    <div className="container">
        <div className="row">
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUpPage;
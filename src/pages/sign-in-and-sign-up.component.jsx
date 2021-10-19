import React from 'react';
import SignIn from '../components/sign-in.component';
import SignUp from '../components/sign-up-component';

const SignInAndSignUpPage = () => (
    <div className="container">
        <div className="row">
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUpPage;
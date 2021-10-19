import React from 'react';
import FormInput from '../form/form-input.component';
import CustomButton from '../form/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;
        
        if (password !== confirmPassword) {
            alert("passwords doesn't match");
            return;
        }

        try {
            //Create user in Firebase Authentication
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            //Store user data in Firebase Firestore Database
            await createUserProfileDocument(user, {displayName});

            //Clear the state, it will clear the form as well
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log(error);
        }

        

    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <div className="formFeilds contact-form form-vertical">
                    <form name="signUp" onSubmit={this.handleSubmit}>	
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">                                    
                                    <FormInput type="text" name="displayName" placeholder="Display Name" handleChange={this.handleChange} value={displayName} required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">                                    
                                    <FormInput type="email" name="email" placeholder="Email" handleChange={this.handleChange} value={email} required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">
                                    <FormInput type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">
                                    <FormInput type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} value={confirmPassword} required />
                                </div>
                            </div>
                        </div>                      
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <CustomButton type="submit" className="btn mr-4">Sign Up</CustomButton>                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;
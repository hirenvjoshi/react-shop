import React from 'react';
import FormInput from '../form/form-input.component';
import CustomButton from '../form/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '',  password: ''});
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState( {[name] : value });
    }

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <div className="formFeilds contact-form form-vertical">
                    <form name="signIn" onSubmit={this.handleSubmit}>	
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">                                    
                                    <FormInput type="email" name="email" placeholder="Email" handleChange={this.handleChange} value={this.state.email} required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-group">
                                    <FormInput type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required />
                                </div>
                            </div>
                        </div>                      
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <CustomButton type="submit" className="btn mr-4">Sign In</CustomButton>
                                <CustomButton type="button" className="btn btn--blue" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }    
}

export default SignIn;
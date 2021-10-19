import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Header from './pages/partials/header.component';
import Slider from './pages/partials/slider.component';
import Footer from './pages/partials/footer.component';
import HomePage from './pages/hompage.component';
import ShopPage from './pages/shoppage.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkoutpage.component';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUserAction } from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';

import { createStructuredSelector } from 'reselect';

class App extends React.Component {	
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		//Open the subscription and store returned function to close it in future
		this.unsubscribeFromAuth =auth.onAuthStateChanged( async userAuth => {	
			if (userAuth) {
				//We need this userRef because we need to check our database has updated at that reference with any new data			
				const userRef = await createUserProfileDocument(userAuth);

				//It will send us the snapshot object representing the data that is currently stored in our database
				//Returns the snapshot object 
				userRef.onSnapshot(snapShot => {
					//On this snapshot object we are going to get the data related to this user

					//Now we can get data from snapshot and populate our state					
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
					
				}) 
			}
			//Set state with null value
			setCurrentUser(userAuth)
		});
	}

	componentWillUnmount() {
		//Closing the subscription when close the application
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Header />				
				<div id="page-content">
					<Slider />
					<Switch>			
						<Route path='/' component={HomePage} exact />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) :  (<SignInAndSignUpPage />)} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}	
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUserAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

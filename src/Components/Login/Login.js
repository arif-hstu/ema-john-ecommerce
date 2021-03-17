import React, { useContext } from 'react'
import "firebase/auth";
import { UserContext } from '../../App'

import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn, initializeFirebase } from './loginManager';


function Login() {
	// initializatin firebase after imported
	initializeFirebase();

	// declaration of logged in user state
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	// redirect if not signed in
	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };


	const googleSignIn = () => {
		handleGoogleSignIn()
			.then(res => {
				setLoggedInUser(res)
				history.replace(from);
			})

	}

	return (<div> <button onClick={
		googleSignIn
	}> Sign in with Google </button></div>
	);
}

export default Login;
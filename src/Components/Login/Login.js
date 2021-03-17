import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext }  from '../../App'

import firebaseConfig from '../../firebaseConfig'
import { useHistory, useLocation } from 'react-router';


function Login() {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}else {
		firebase.app(); // if already initialized, use that one
	}
	
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	// redirect if not signed in
	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: {pathname: '/'}};

	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				var user = result.user;
				setLoggedInUser(user);
				history.replace(from);

			}).catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
			});
	}


	return (<div> <button onClick={
		handleGoogleSignIn
	}> Sign in with Google </button></div>
	);
}

export default Login;
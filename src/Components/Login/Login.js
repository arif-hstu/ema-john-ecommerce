import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext }  from '../../App'

import firebaseConfig from '../../firebaseConfig'


function Login() {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}else {
		firebase.app(); // if already initialized, use that one
	}
	
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				var user = result.user;
				setLoggedInUser(user)

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
import {useState, useEffect} from 'react';
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';

export function useAuth(authFirebase) {
	const [authentication, setAuthentication] = useState(null);

	const provider = new GoogleAuthProvider();

	const auth = authFirebase;
	// console.log(auth);

	const logIn = () => signInWithPopup(auth, provider);

	const logOut = () =>
		signOut(auth)
			.then()
			.catch((err) => console.error());

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			// console.log(user);
			if (user) {
				setAuthentication(user);
			} else {
				setAuthentication(null);
			}
		});
	}, [authentication]);

	return {authentication, logIn, logOut};
}

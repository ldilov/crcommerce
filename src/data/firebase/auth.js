import { providers } from './app';
import {
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

export const auth = getAuth();

const provider = providers.auth;
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserWithCredentials = (email, password) =>
	createUserWithEmailAndPassword(auth, email, password);

export const onAuthStateChange = onAuthStateChanged;

import { providers } from './app';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const auth = getAuth();

const provider = providers.auth;
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const onAuthStateChange = onAuthStateChanged;

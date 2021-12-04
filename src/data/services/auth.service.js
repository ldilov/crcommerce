import AuthUserDTO from '../dtos/auth-user.dto';
import { onAuthStateChange, signInWithGoogle, auth } from '../firebase/auth';

class AuthService {
	#onAuthStateChange;
	#signInWithGoogle;
	#authStateSubscription;

	constructor() {
		this.#onAuthStateChange = onAuthStateChange;
		this.#signInWithGoogle = signInWithGoogle;
		this.#authStateSubscription = null;

		this.providers = {
			GOOGLE: 'GOOGLE',
			STANDARD: 'STANDARD',
		};
	}

	signIn(strategy) {
		let signInMethod = null;

		switch (strategy) {
			case this.providers.GOOGLE:
				signInMethod = this.#signInWithGoogle;
				break;
			default:
				signInMethod = () => {};
				break;
		}

		return signInMethod();
	}

	signOut() {
		if (auth.currentUser) {
			auth.signOut();
		}
	}

	setAuthHandler(stateSetter) {
		this.#authStateSubscription = this.#onAuthStateChange(auth, (user) => {
			stateSetter({ currentUser: user ? new AuthUserDTO(user) : null });
		});
	}

	destroyAuthHandler() {
		if (this.#authStateSubscription) {
			this.#authStateSubscription();
		}
	}
}

const serviceObject = new AuthService();
export default serviceObject;

import AuthUserDTO from '../dtos/auth-user.dto';
import FirebaseCreateAuthUserError from '../errors/firebase-create-auth-user-error';

import LazyLoader from '../helpers/LazyLoader';

const FirebaseAuth = {
  module: () => import('../firebase/auth')
};

const load = new LazyLoader(FirebaseAuth).import;

class AuthService {
  #authStateSubscription;

  constructor() {
    this.#authStateSubscription = null;

    this.providers = {
      GOOGLE: 'GOOGLE',
      STANDARD: 'STANDARD'
    };
  }

  async signUpWithCredentials(email, password) {
    let result = null;

    try {
      const createUserWithCredentials = await load('createUserWithCredentials');
      result = createUserWithCredentials(email, password);
    } catch (error) {
      throw new FirebaseCreateAuthUserError(`Unable to create user ${email}!`, error);
    }

    return result;
  }

  signIn = async (strategy, credentials = null) => {
    let signInMethod = null;
    const [signInWithGoogle, signInWithCredentials] = await Promise.all([
      load('signInWithGoogle'),
      load('signInWithCredentials')
    ]);

    switch (strategy) {
      case this.providers.GOOGLE:
        signInMethod = signInWithGoogle;
        break;
      case this.providers.STANDARD:
        signInMethod = signInWithCredentials;
        break;
      default:
        signInMethod = () => {};
        break;
    }

    if (credentials) {
      const { email, password } = credentials;
      return signInMethod(email, password);
    }

    return signInMethod();
  };

  async signOut() {
    const auth = await load('auth');

    if (auth.currentUser) {
      auth.signOut();
    }
  }

  getCurrentUser = async () => {
    const auth = await load('auth');
    const onAuthStateChange = await load('onAuthStateChange');

    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChange(
        auth,
        (user) => {
          unsubscribe();
          resolve(user ? new AuthUserDTO(user) : null);
        },
        reject
      );
    });
  };

  async setAuthHandler(stateSetter) {
    const onAuthStatePromise = load('onAuthStateChange');
    const authPromise = load('auth');
    const [onAuthStateChange, auth] = await Promise.all([onAuthStatePromise, authPromise]);
    this.#authStateSubscription = onAuthStateChange(auth, (user) => {
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

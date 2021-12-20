import AuthUserDTO from '../dtos/auth-user.dto';
import FirebaseCreateAuthUserError from '../errors/firebase-create-auth-user-error';

const FirebaseAuth = {
  module: () => import('../firebase/auth')
};

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
      const { createUserWithCredentials } = await this.#getLazyModules();
      result = createUserWithCredentials(email, password);
    } catch (error) {
      throw new FirebaseCreateAuthUserError(`Unable to create user ${email}!`, error);
    }

    return result;
  }

  async signIn(strategy, credentials = null) {
    let signInMethod = null;

    const { signInWithGoogle, signInWithCredentials } = await this.#getLazyModules();

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
  }

  async signOut() {
    const { auth } = await this.#getLazyModules();
    if (auth.currentUser) {
      auth.signOut();
    }
  }

  async setAuthHandler(stateSetter) {
    const { onAuthStateChange, auth } = await this.#getLazyModules();
    this.#authStateSubscription = onAuthStateChange(auth, (user) => {
      stateSetter({ currentUser: user ? new AuthUserDTO(user) : null });
    });
  }

  destroyAuthHandler() {
    if (this.#authStateSubscription) {
      this.#authStateSubscription();
    }
  }

  #getLazyModules = async () => {
    if (typeof FirebaseAuth.module === 'function') {
      FirebaseAuth.module = await FirebaseAuth.module();
    }
    return FirebaseAuth.module;
  };
}

const serviceObject = new AuthService();
export default serviceObject;

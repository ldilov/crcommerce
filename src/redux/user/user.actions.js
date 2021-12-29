import { ACTION_TYPES } from './user.constants';

export const setCurrentUser = (user) => ({
  type: ACTION_TYPES.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: ACTION_TYPES.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
  type: ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({
  type: ACTION_TYPES.SIGN_IN_FAILURE,
  payload: error
});

export const credsSignInStart = (emailAndPassword) => ({
  type: ACTION_TYPES.CREDENTIALS_SIGN_IN_START,
  payload: emailAndPassword
});

export const signOut = () => ({
  type: ACTION_TYPES.SIGN_OUT
});

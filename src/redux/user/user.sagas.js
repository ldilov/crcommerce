import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './user.constants.js';

import AuthService from '../../data/services/auth.service';
import UserService from '../../data/services/user.service';
import { signInFailure, signInSuccess } from './user.actions';

export function* signInWithGoogle() {
  yield signInWithProvider(AuthService.providers.GOOGLE);
}

export function* signInWithCredentials({ payload }) {
  const { email, password } = payload;
  yield signInWithProvider(AuthService.providers.STANDARD, {
    email,
    password
  });
}

export function* onGoogleSingInStart() {
  yield takeLatest(ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCredentialsSingInStart() {
  yield takeLatest(ACTION_TYPES.CREDENTIALS_SIGN_IN_START, signInWithCredentials);
}

export function* userSagas() {
  yield all([call(onGoogleSingInStart), call(onCredentialsSingInStart)]);
}

function* signInWithProvider(authProvider, credentials = null) {
  try {
    const { user } = yield call(AuthService.signIn, authProvider, credentials);
    const result = yield call(UserService.saveAuthUser, user);
    yield put(signInSuccess(result));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

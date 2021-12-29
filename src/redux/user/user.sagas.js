import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './user.constants.js';

import AuthService from '../../data/services/auth.service';
import UserService from '../../data/services/user.service';
import {
  credsSignInFailure,
  credsSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess
} from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield call(AuthService.signIn, AuthService.providers.GOOGLE);
    const result = yield call(UserService.saveAuthUser, user);
    yield put(googleSignInSuccess(result));
  } catch (err) {
    yield put(googleSignInFailure(err.message));
  }
}

export function* signInWithCredentials({ payload }) {
  const { email, password } = payload;

  try {
    const { user } = yield call(AuthService.signIn, AuthService.providers.STANDARD, {
      email,
      password
    });
    const result = yield call(UserService.saveAuthUser, user);
    yield put(credsSignInSuccess(result));
  } catch (err) {
    yield put(credsSignInFailure(err.message));
  }
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

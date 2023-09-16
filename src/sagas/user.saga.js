import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getRedirectResult } from "firebase/auth";

import { UserActionTypes, UserActions } from '../actions/user.actions';

import {
  auth,
  logoutUser,
  getCurrentUser,
  signInWithGooglePopup,
  loginWithEmailAndPassword,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(UserActions.signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    }));
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* userSignOut() {
  try {
    yield call(logoutUser);
    yield put(UserActions.userSignoutSuccess());
  } catch (error) {
    yield put(UserActions.userSignoutFailed(error));
  }
}

export function* authRedirectResult() {
  try {
    yield call(getRedirectResult, auth);
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* signInAfterSignUpSuccess({ payload }) {
  try {
    const { user, additionalDetails } = payload;
    yield call(getSnapshotFromUserAuth, user, additionalDetails);
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* userRegistration({ payload }) {
  try {
    const { email, password, displayName } = payload;
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(UserActions.userSignUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(UserActions.userSignUpFailed(error));
  }
}

export function* googleLogin() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* emailAndPasswordLogin({ payload }) {
  try {
    const { email, password } = payload;
    yield call(loginWithEmailAndPassword, email, password);
    yield put(UserActions.checkUserSession());
  } catch (error) {
    yield put(UserActions.signInFailed(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, userRegistration);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, userSignOut);
}

export function* onGetAuthRedirectResultStart() {
  yield takeLatest(UserActionTypes.GET_AUTH_REDIRECT_RESULT_START, authRedirectResult);
}

export function* onGoogleLoginStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleLogin);
}

export function* onEmailAndPasswordLogin() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailAndPasswordLogin);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignOutStart),
    call(onSignUpSuccess),
    call(onGoogleLoginStart),
    call(onCheckUserSession),
    call(onEmailAndPasswordLogin),
    // call(onGetAuthRedirectResultStart),
  ]);
}
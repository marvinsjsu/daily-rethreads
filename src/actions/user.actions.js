
export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
  GET_AUTH_REDIRECT_RESULT_START: 'GET_AUTH_REDIRECT_RESULT_START',
};

export const UserActions = {
  setCurrentUser: (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  }),
  checkUserSession: () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
  }),
  googleSignInStart: () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  }),
  emailSignInStart: (email, password) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: {
      email,
      password,
    },
  }),
  signInSuccess: (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  }),
  signInFailed: (error) => ({
    type: UserActionTypes.SIGN_IN_FAILED,
    payload: error,
  }),
  getAuthRedirectResult: () => ({
    type: UserActionTypes.GET_AUTH_REDIRECT_RESULT_START,
  }),
  userSignOutStart: () => ({
    type: UserActionTypes.SIGN_OUT_START,
  }),
  userSignoutSuccess: () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  }),
  userSignoutFailed: (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILED,
    payload: error,
  }),
  userSignUpStart: (email, password, displayName) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: {
      email,
      password,
      displayName,
    },
  }),
  userSignUpSuccess: (user, additionalDetails) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {
      user,
      additionalDetails,
    },
  }),
  userSignUpFailed: (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILED,
    payload: error,
  }),
};

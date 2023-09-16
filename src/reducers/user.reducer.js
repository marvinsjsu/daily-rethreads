
import { UserActionTypes } from "../actions/user.actions";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        error: null,
        isLoading: false,
        currentUser: payload,
      };
    }
    case UserActionTypes.SIGN_IN_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false,
        currentUser: null,
      }
    }
    case UserActionTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        error: null,
        isLoading: false,
        currentUser: null,
      }
    }
    case UserActionTypes.SIGN_OUT_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      }
    }
    default: {
      return state;
    }
  }

};

export default reducer;

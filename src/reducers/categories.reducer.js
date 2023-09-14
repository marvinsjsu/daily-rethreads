
import { CategoriesActionTypes } from "../actions/categories.actions";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;

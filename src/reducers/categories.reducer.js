
import { CategoriesActionTypes } from "../actions/categories.actions";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;

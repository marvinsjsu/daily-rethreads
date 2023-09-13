import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesActionTypes = {
    FETCH_CATEGORIES_PENDING: 'FETCH_CATEGORIES_PENDING',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

export const CategoriesActions = {
    fetchCategoriesStarted: () => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_PENDING,
    }),
    fetchCategoriesSucceeded: (categories) => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categories,
    }),
    fetchCategoriesFailed: (error) => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED,
        payload: error,
    }),
};

export const getCategories = () => async (dispatch) => {
    try {
        dispatch(CategoriesActions.fetchCategoriesStarted());
        const categories = await getCategoriesAndDocuments();
        dispatch(CategoriesActions.fetchCategoriesSucceeded(categories));
    } catch(error) {
        console.log('Error fetching categories: ', error.message);
        dispatch(CategoriesActions.fetchCategoriesFailed(error.message));
    }
};


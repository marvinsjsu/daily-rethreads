import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesActionTypes = {
    FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

export const CategoriesActions = {
    fetchCategoriesStart: () => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_START,
    }),
    fetchCategoriesSuccess: (categories) => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categories,
    }),
    fetchCategoriesFailed: (error) => ({
        type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED,
        payload: error,
    }),
    getCategoriesAsync: () => async (dispatch) => {
        try {
            dispatch(CategoriesActions.fetchCategoriesStart());
            const categories = await getCategoriesAndDocuments();
            dispatch(CategoriesActions.fetchCategoriesSuccess(categories));
        } catch (error) {
            console.log('Error fetching categories: ', error.message);
            dispatch(CategoriesActions.fetchCategoriesFailed(error.message));
        }
    },
};

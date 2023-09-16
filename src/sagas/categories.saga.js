import {
    put,
    all,
    call, 
    takeLatest,
} from 'redux-saga/effects';

import { CategoriesActions, CategoriesActionTypes } from "../actions/categories.actions";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCategoriesAndDocuments, 'categories');
        yield put(CategoriesActions.fetchCategoriesSuccess(categories));
    } catch (error) {
        yield put(CategoriesActions.fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSagas() {
    yield all([call(onFetchCategories)]);
};

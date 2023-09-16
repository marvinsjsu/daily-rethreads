import { all, call } from 'redux-saga/effects';

import { userSagas } from './user.saga';
import { categoriesSagas } from './categories.saga';

export function* rootSaga() {
    yield all([
        call(userSagas),
        call(categoriesSagas),
    ]);
};

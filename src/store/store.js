import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);


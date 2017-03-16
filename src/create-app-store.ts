import { compose, createStore, applyMiddleware } from 'redux';
import * as Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';

import * as reducers from './data-models/reducers';

const reducer = combineReducers({...reducers});
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer, Immutable.Map());

export default store;

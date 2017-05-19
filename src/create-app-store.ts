import { compose, createStore, applyMiddleware } from 'redux';
import { Record, List, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';

import { ApplicationState } from './types'
import * as reducers from './data-models/reducers';

const reducer = combineReducers({...reducers});
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer, new ApplicationState());

export default store;

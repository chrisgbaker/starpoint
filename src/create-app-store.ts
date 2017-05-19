import { compose, createStore, applyMiddleware } from 'redux';
import { Record, List, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';

import * as reducers from './data-models/reducers';

const fullAppShape = Record({home: undefined})();

const reducer = combineReducers({...reducers});
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer, fullAppShape);

export default store;

import Immutable from 'immutable';
import * as actionTypes from './action-types';

const initialState =
	Immutable.Map({
		fetching: null,
		posts: null,
	});

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCHING:
			return state.set('fetching', action.payload);
		case actionTypes.SYNC:
			return state.merge({
				fetching: false,
				posts: action.payload,
			});
		default: return state;
	}

}

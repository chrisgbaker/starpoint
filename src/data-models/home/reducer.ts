import * as Immutable from 'immutable';
import * as actionTypes from './action-types';

const initialState = {
	actionNamespace: '',
	initialState: Immutable.Map({
		fetching: false,
		data: null,
	})
};

export default function(state = initialState, action) {
switch (action.type) {
			case actionTypes.FETCH:
				return state.set('fetching', true);
            }
}

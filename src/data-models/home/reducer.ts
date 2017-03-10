import * as Immutable from 'immutable';
import * as actionTypes from './action-types';

type HomeAction = actionTypes.FetchAction | actionTypes.SyncAction; //add other actiontypes separated by a pipe as necessary

const initialState =
	Immutable.Map({
		fetching: false,
		data: null,
	});

function reducer(state: Immutable.Map<string, boolean> = initialState, action: HomeAction) {
	switch (action.type) {
		case actionTypes.FETCH:
			return state.set('fetching', action.payload);
		case actionTypes.FETCH:
			return state.merge({
				fetching: false,
				data: action.payload,
			});
		default: return state;
	}

}

export default reducer;

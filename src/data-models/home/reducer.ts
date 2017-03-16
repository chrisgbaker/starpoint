import * as Immutable from 'immutable';
import * as actionTypes from './action-types';
import { ImmutableMap } from '../../types'

//add other actiontypes separated by a pipe as necessary
type HomeAction = actionTypes.FetchingAction | actionTypes.SyncAction; 

const initialState =
	Immutable.Map({
		fetching: null,
		posts: null,
	});

export default function(state: ImmutableMap<any> = initialState,
 action: HomeAction) : ImmutableMap<any> {
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

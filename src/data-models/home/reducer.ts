import * as actionTypes from './action-types';
import { HomeState } from '../../types'

//add other actiontypes separated by a pipe as necessary
type HomeAction = actionTypes.FetchingAction | actionTypes.SyncAction; 

export default function(state: HomeState = new HomeState(), action: HomeAction) : HomeState {
	switch (action.type) {
		case actionTypes.FETCHING:
			const fetchingParams ={
				fetching: action.payload, 
				posts: state.get('posts') 
			};
			return new HomeState(fetchingParams);
			//return state.with(newStateParams);
			//return state.set("fetching", action.payload);
		case actionTypes.SYNC:
		const syncParams ={
				fetching: false, 
				posts: action.payload
			};
			return new HomeState(syncParams);
			// return state.with({
			// 		fetching: false,
			// 		posts: action.payload,
			// 	});
		default: return state;
	}

}

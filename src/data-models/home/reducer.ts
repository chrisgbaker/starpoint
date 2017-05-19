import * as actionTypes from './action-types';
import { Post, PostsState } from '../../types'

//add other actiontypes separated by a pipe as necessary
type HomeAction = actionTypes.FetchingAction | actionTypes.SyncAction; 

export default function(state: PostsState = new PostsState(), action: HomeAction) : PostsState {
	switch (action.type) {
		case actionTypes.FETCHING:
			const fetchingParams ={
				fetching: action.payload, 
				posts: state.get('posts') 
			};
			return new PostsState(fetchingParams);
			//return state.with(newStateParams);
			//return state.set("fetching", action.payload); //doesnt work anymore. returns map not record
		case actionTypes.SYNC:
		const syncParams ={
				fetching: false, 
				posts: action.payload
			};
			return new PostsState(syncParams);
			// return state.with({
			// 		fetching: false,
			// 		posts: action.payload,
			// 	});
		default: return state;
	}

}

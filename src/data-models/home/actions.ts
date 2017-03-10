import * as actionTypes from './action-types';

export function fetch(value: boolean): actionTypes.FetchAction {
	return {
		type: actionTypes.FETCH,
		payload: value
	};
} 

export function sync(value: JSON): actionTypes.SyncAction {
	return {
		type: actionTypes.SYNC,
		payload: value
	};
} 

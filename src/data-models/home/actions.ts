import * as actionTypes from './action-types';

export function fetching(value: boolean): actionTypes.FetchingAction {
	return {
		type: actionTypes.FETCHING,
		payload: value
	};
}

export function sync(): actionTypes.SyncAction {
	let value;
	fetch('http://drinkdurham.com/wp-json/wp/v2/posts/')
		.then((resp) => resp.ok ? resp.json() : null)
		.then((json) => {
			value = json;
			console.log(value)
		});
		console.log('after fetch')
	return {
		type: actionTypes.SYNC,
		payload: value
	};
} 

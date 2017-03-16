//import fetch from 'isomorphic-fetch'
import * as actionTypes from './action-types';
import { BASE_URL } from '../api-constants'

function fetching(value) {
	return {
		type: actionTypes.FETCHING,
		payload: value
	};
}

function sync(value) {
	return {
		type: actionTypes.SYNC,
		payload: value
	};
}

export function requestHome() {
	return (dispatch) => {
		dispatch(fetching(true));
		return new Promise((resolve, reject) => {
			return fetch(`${BASE_URL}/posts/`)
				.then((resp) => resp.ok ? resp.json() : reject(resp))
				.then((posts) => dispatch(sync(posts)) && resolve(this))
				.catch((e) => {
					reject(new Error(e));
					// an error handler for all .then(...) callbacks
					// http://stackoverflow.com/questions/24662289/when-is-thensuccess-fail-considered-an-antipattern-for-promises
				});

		});
	}
}
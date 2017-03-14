import * as fetch from 'isomorphic-fetch'
import { Post } from '../../types'
import * as actionTypes from './action-types';
import { BASE_URL } from '../api-constants'

function fetching(value: boolean): actionTypes.FetchingAction {
	return {
		type: actionTypes.FETCHING,
		payload: value
	};
}

function sync(value: Post[]): actionTypes.SyncAction {
	return {
		type: actionTypes.SYNC,
		payload: value
	};
}

// //need to figure out async await w/ redux. but this does the same as below
// export async function requestHome() {
// 	return async (dispatch: Function) => {
// 		let request = await fetch(`${BASE_URL}/posts/`);
// 		let response = <Promise<Post[]>> await request.json();
// 		dispatch(sync(response));
// 	}
// }

export function requestHome() {
	return (dispatch: Function) : Promise<Response> => {
		dispatch(fetching(true));
		return new Promise((resolve, reject) => {
			return fetch(`${BASE_URL}/posts/`)
				.then((resp: Response) => resp.ok ? resp.json() : reject(resp))
				.then((posts: Post[]) => dispatch(sync(posts)))
				.catch((e) => {
					reject(new Error(e));
					// an error handler for all .then(...) callbacks
					// http://stackoverflow.com/questions/24662289/when-is-thensuccess-fail-considered-an-antipattern-for-promises
				});

		});
	}
}
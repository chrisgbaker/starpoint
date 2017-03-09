import * as actionTypes from './action-types';

export function fetch(value) {
	return {
		type: actionTypes.SET,
		payload: value
	};
}

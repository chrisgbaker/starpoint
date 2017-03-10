import Action from '../interfaces';

export type FETCH = 'data-models/home/fetch';
export const FETCH: FETCH = 'data-models/home/fetch';
export type FetchAction = Action<FETCH, boolean>;

export type SYNC = 'data-models/home/sync';
export const SYNC: SYNC = 'data-models/home/sync';
export type SyncAction = Action<SYNC, JSON>;

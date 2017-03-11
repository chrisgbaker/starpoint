import Action from '../interfaces';

export type FETCHING = 'data-models/home/fetching';
export const FETCHING: FETCHING = 'data-models/home/fetching';
export type FetchingAction = Action<FETCHING, boolean>;

export type SYNC = 'data-models/home/sync';
export const SYNC: SYNC = 'data-models/home/sync';
export type SyncAction = Action<SYNC, JSON>;

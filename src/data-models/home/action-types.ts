import Action, { Post } from '../../types';

export type FETCHING = 'home/fetching';
export const FETCHING: FETCHING = 'home/fetching';
export type FetchingAction = Action<FETCHING, boolean>;

export type SYNC = 'home/sync';
export const SYNC: SYNC = 'home/sync';
export type SyncAction = Action<SYNC, Post[]>;

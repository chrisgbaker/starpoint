import { RouteComponentProps } from 'react-router-dom'
import { Record } from 'immutable';

export interface Post {
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
}

export type HomeStateParams = {
  fetching: boolean;
  posts: Post[];
}

export class HomeState extends Record({
		fetching: null,
		posts: null} as HomeStateParams ) implements HomeStateParams  {
			
			readonly fetching: boolean;
			readonly posts: Post[];
			
			constructor(params?: HomeStateParams) {
        params ? super(params) : super();
			}
			
			with(values: HomeStateParams) {
				return this.merge(values) as this;
			}
}

export interface HomeProperties {
  loaded: boolean;
  posts: Post[];
  fetchHomepage?(): void;
}

interface Action<P, S> {
  type: P;
  payload: S;
  error?: boolean;
  meta?: any;
}

export interface TestComponentProperties extends RouteComponentProps<{}> { message?: string; }

export default Action;

// The state of the entire application
// I'm not 100% sure this is the best way to do this,
// but with Immutable.Record you need to have the 
// root structure of your Record pre-defined, unlike 
// Immutable.Map, where you can just add a new key/value
export class ApplicationState extends Record({
  home: undefined as HomeState
}){ };
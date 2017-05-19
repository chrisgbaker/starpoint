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

export type PostsStateParams = {
  fetching: boolean;
  posts: Post[];
}

export class PostsState extends Record({
		fetching: null,
		posts: null} as PostsStateParams ) implements PostsStateParams  {
			
			readonly fetching: boolean;
			readonly posts: Post[];
			
			constructor(params?: PostsStateParams) {
        params ? super(params) : super();
			}
			
			with(values: PostsStateParams) {
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


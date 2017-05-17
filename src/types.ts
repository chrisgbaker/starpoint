import * as Immutable from 'immutable';
import {RouteComponentProps} from 'react-router-dom'

export interface ImmutableMap<T> extends Immutable.Map<string, T> { }; //tired of typing this everywhere...

export interface Post {
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
}

export interface HomeProperties {
  isLoading: number;
  postsMap: ImmutableMap<Post>;
  fetchHomepage(): void;
}

interface Action<P, S> {
  type: P;
  payload: S;
  error?: boolean;
  meta?: any;
}

export interface TestComponentProperties extends RouteComponentProps<{}> { message?: string; }

export default Action;


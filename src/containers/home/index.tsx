import * as React from 'react'
import { connect } from 'react-redux';
import { List } from 'immutable'

import { actions as homeActions } from '../../data-models/home'
import { Post } from '../../data-models/interfaces'

interface HomeProperties {
  isLoading: boolean;
  home_posts: Post[];
  fetchHomepage(fetching: boolean): void;
}

const matchStateToProps = (state: any): any => ({
  isLoading: state.getIn(['home', 'fetching']),
  home_posts: state.getIn(['home', 'posts'])
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchHomepage: (fetching: boolean) => dispatch(homeActions.requestHome()),
});

const iterateOverPosts = (post: Post, index: number) => {
  return (<div key={index}>
    <h1>{post.title}</h1>
    <div>{post.content}</div>
  </div>)
};

class HomeComponent extends React.Component<HomeProperties, any> {
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchHomepage(true);
  }
  render() {
    const { isLoading, home_posts } = this.props;
    debugger;
    if (isLoading === null || isLoading) {
      return <div>loading...</div>
    }

    return <div>{home_posts.map(iterateOverPosts)}</div>
  }
}

export default connect(matchStateToProps, mapDispatchToProps)(HomeComponent);

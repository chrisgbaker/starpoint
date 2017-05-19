import * as React from 'react'
import { connect } from 'react-redux';

import { actions as homeActions } from '../../data-models/home'
import { PostsState, HomeProperties, Post } from '../../types'

import PostCarousel from '../../components/post-carousel'
import Spinner from '../../components/spinner'

const mapStateToProps = (state: PostsState, ownProps? :any): any => ({
  loaded: state.fetching,
  posts: state.posts
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchHomepage: () => dispatch(homeActions.requestHome()),
});

class HomeComponent extends React.Component<HomeProperties, any> {
    shouldComponentUpdate(nextProps: HomeProperties) {
         return this.props.posts !== nextProps.posts;
    }
  componentWillMount() {
    this.props.fetchHomepage();
  }
  render() {
    const { loaded } = this.props;
    if (!loaded) {
      return <Spinner text={'loading'}/>
    }

    return (
      <div>
        <PostCarousel posts={this.props.posts}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

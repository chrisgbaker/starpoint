import * as React from 'react'
import { connect } from 'react-redux';

import { actions as homeActions } from '../../data-models/home'
import { HomeProperties, Post } from '../../types'

import PostCarousel from '../../components/post-carousel'
import Spinner from '../../components/spinner'

const matchStateToProps = (state: any): any => ({
  isLoading: state.getIn(['home', 'fetching']),
  home_posts: state.getIn(['home', 'posts'])
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchHomepage: () => dispatch(homeActions.requestHome()),
});

class HomeComponent extends React.Component<HomeProperties, any> {
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchHomepage();
  }
  render() {
    const { isLoading } = this.props;
    if (isLoading === null || isLoading) {
      return <Spinner text={'loading'}/>
    }

    const posts = this.props.home_posts.toJS() as Post[]; //try to get away from .toJS. also the "as" is not necessary
    
    return (
      <div>
        <PostCarousel posts={posts}/>
      </div>
    );
  }
}

export default connect(matchStateToProps, mapDispatchToProps)(HomeComponent);

import React from 'react'
import { connect } from 'react-redux';

import { actions as homeActions } from '../../data-models/home'

import PostCarousel from '../../components/post-carousel'
import Spinner from '../../components/spinner'

const mapStateToProps = (state) => ({
  isLoading: state.getIn(['home', 'fetching']),
  postsMap: state.getIn(['home', 'posts'])
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomepage: () => dispatch(homeActions.requestHome()),
});


class HomeComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
         return this.props.postsMap !== nextProps.postsMap;
    }
  componentWillMount() {
    this.props.fetchHomepage();
  }
  render() {
    const { isLoading } = this.props;
    if (isLoading === null || isLoading) {
      return <Spinner text={'loading'}/>
    }

    const posts = this.props.postsMap.toJS(); 
    //try to get away from .toJS for perf. reasons. also the "as" is not necessary but is more readable...
    
    return (
      <div>
        <PostCarousel posts={posts}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

import * as React from 'react'
import { connect } from 'react-redux';
import { actions as homeActions } from '../../data-models/home'

interface HomeProps {
  isLoading: boolean;
  data: JSON;
  fetchHomepage(fetching: boolean): void;
  syncHomepage(): void;
}

const matchStateToProps = (state: any): any => ({
  isLoading: state.get('home', 'fetching'),
  data: state.get('home', 'data')
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchHomepage: (fetching: boolean) => dispatch(homeActions.fetching(fetching)),
  syncHomepage: () => dispatch(homeActions.sync())
});

class HomeComponent extends React.Component<HomeProps, any> {
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchHomepage(true);
    this.props.syncHomepage();
  }
  render() {
    const {isLoading, data } = this.props;
    if (isLoading) {
      console.log('loading')
      return <div>loading...</div>
    }
    console.log('should have data')
    return <div>{data ? JSON.stringify(data) : 'loading'}</div>
  }
}

export default connect(matchStateToProps, mapDispatchToProps)(HomeComponent);

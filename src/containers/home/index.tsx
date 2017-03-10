import * as React from 'react'
import { connect } from 'react-redux';

export interface IHomeProps { message: string; }

const matchStateToProps = (state: any): any => ({
  message: state.get('home', 'data')
});

class HomeComponent extends React.Component<IHomeProps, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <div>{this.props.message}</div>
  }
}


const connectedComponent = connect(matchStateToProps)(HomeComponent);

export default connectedComponent;
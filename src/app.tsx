import * as React from 'react'
import Routing from './routing';
import { Provider } from 'react-redux';
import store from './create-app-store'

export default class App extends React.Component<any,any>{
  render() {
      return (
        <Provider store = { store }>
            <Routing/>
        </Provider>
        );
  }
};

import * as React from 'react'

export interface AppProps { message: string; }

export class App extends React.Component<AppProps, undefined> {
  constructor (props:any) {
    super(props)
  }
  render () {
    return <div>{this.props.message}</div>
  }
}

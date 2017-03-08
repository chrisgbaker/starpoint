import * as React from 'react'

export interface HomeProps { message?: string; }

export default class HomeComponent extends React.Component<HomeProps, undefined> {
  constructor (props:any) {
    super(props)
  }
  render () {
    return <div>{this.props.message? this.props.message : 'hi'}</div>
  }
}

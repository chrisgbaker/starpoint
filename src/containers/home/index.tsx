import * as React from 'react'

export interface IHomeProps { message?: string; }

export default class HomeComponent extends React.Component<IHomeProps, undefined> {
  constructor (props:any) {
    super(props)
  }
  render () {
    const { message = 'hi.' } = this.props; 
    return <div>{ message }</div>
  }
}

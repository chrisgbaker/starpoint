import * as React from 'react'

export interface ITestComponentProps { message?: string; }

export default class TestComponent extends React.Component<ITestComponentProps, any> {
  constructor (props:any) {
    super(props)
  }
  render () {
    const { message = 'hi.' } = this.props; 
    return <div>{ message }</div>
  }
}

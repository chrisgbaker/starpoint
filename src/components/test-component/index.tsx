import * as React from 'react'

export interface TestComponentProps { message?: string; }

export default class TestComponent extends React.Component<TestComponentProps, any> {
  constructor (props:any) {
    super(props)
  }
  render () {
    return <div>{this.props.message ? this.props.message : 'beer!'}</div>
  }
}

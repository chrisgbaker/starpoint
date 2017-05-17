import * as React from 'react'
import {TestComponentProperties} from '../../types'

export default class TestComponent extends React.Component<TestComponentProperties, any> {
  constructor (props:any) {
    super(props)
  }
  render () : JSX.Element {
    const { message = 'hi.' } = this.props; 
    return (
      <div>
        { message }
      </div>)
  }
}

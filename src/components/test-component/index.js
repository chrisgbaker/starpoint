import React from 'react'

export default class TestComponent extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    const { message = 'hi.' } = this.props; 
    return <div>{ message }</div>
  }
}

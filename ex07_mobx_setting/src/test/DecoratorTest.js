import React from 'react'

// Decorator that passes on a 'message' property to a class.
const addMessage = (str) => (component) => {
  component.prototype.message = str
}

@addMessage('Hello world!')
class DecoratorTest extends React.PureComponent {
  render() {
    return <div>{ this.message }</div>
  }
}
export default DecoratorTest
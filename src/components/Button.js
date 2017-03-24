import React from 'react'

export default class Button extends React.Component {
  handleClick = e => {
    if (this.props.onClick) {
      this.props.onClick()
    }

    console.log('event')
  }

  render() {
    const {onClick, ...props} = this.props
    return <button onClick={this.handleClick} {...props} />
  }
}

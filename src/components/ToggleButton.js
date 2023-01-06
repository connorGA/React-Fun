import React, { Component } from 'react';


class ToggleButton extends Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default ToggleButton;
import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  '',
    }
  }

  onChangeValue = (e) => {
    this.setState({value: e.target.value});
    this.props.getValue(e.target.value);
  }

  onKeyDown = (e) => {
    if (e.code === 'Enter') {
      this.props.getValue()
    }
  }

  render() {
    return (
        <input 
          className='input' 
          type= {'text'} 
          placeholder= {'...'} 
          onChange= {this.onChangeValue}
          onKeyDown= {this.onKeyDown}
          value = {this.state.value}
        />
    );
  }
}

export default Input;

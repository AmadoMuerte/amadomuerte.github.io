import React, { Component } from 'react';
import ButtonAdd from '../buttons/ButtonAdd';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  '',
    }
  }
  
  handleClear = (e) => {
    this.setState({
      value: ''
    })
  }

  onChangeValue = (e) => {
    this.setState({value: e.target.value});
  }

  addItem = () => {
    
    this.props.addItem(this.state.value);
    this.handleClear();
  }

  onKeyDown = (e) => {
    if (e.code === 'Enter') {
      this.addItem()
    }
  }

  render() {

    return (
      <div>
        <input 
          className='input' 
          type= {'text'} 
          placeholder= {'...'} 
          onChange= {this.onChangeValue}
          onKeyDown= {this.onKeyDown}
          value = {this.state.value}
        />
        <ButtonAdd addItem= {this.addItem}/>
      </div>
    );
  }
}

export default Input;

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
  
  onChangeValue = (e) => {
    this.setState({value: e.target.value});
  }

  addItem = () => {
    this.props.addItem(this.state.value);
  }

  render() {
    let {value} = this.state.value;
    return (
      <div>
        <input 
          className='input' 
          type={'text'} 
          placeholder={'...'} 
          onChange={this.onChangeValue} 
        >
          {value}
        </input>

        <ButtonAdd addItem={this.addItem}/>
      </div>
    );
  }
}

export default Input;

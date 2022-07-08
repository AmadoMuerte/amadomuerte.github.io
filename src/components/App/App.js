import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {


    return (
      <div className='header'>
        <Input/>
      </div>
    );
  }
}

export default App;

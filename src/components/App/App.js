import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {


    return (
      <div className='header'>
        <Input />
        <TodoList />
      </div>
    );
  }
}

export default App;

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
      <div>
        <div className='header'>
        <Input />
        
        </div>
        <main className='main'>
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;

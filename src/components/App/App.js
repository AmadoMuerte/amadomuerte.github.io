import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [ {value: 'hello world', id: 2}, ],
    }
  }

  addItem = (value) => {
    let id = Math.floor(Math.random() * 500) + value;

    let item = {value: value, id: id}
    this.setState(({data}) => {
      const newArr = [...data, item];
      return {data: newArr}
    });
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      let deletedItem = data.filter(item => {
        return item.id === id
      })
      console.log(deletedItem);
      const newArr = [...data].splice(deletedItem, 1);
      return {data: newArr}
    })
  }

  render() {
    let {data} = this.state
    return (
      <div>
        <div className='header'>
        <Input addItem={this.addItem}/>
        </div>
        <main className='main'>
          <TodoList data={data} delete={this.onDelete}/>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: JSON.parse(localStorage.getItem('items')) || [],
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

  updateStorage = () => {
    const data = JSON.stringify(this.state.data);
    localStorage.setItem(`items`, data);
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
          {this.updateStorage()}
        </main>
      </div>
      
    );
  }
}

export default App;

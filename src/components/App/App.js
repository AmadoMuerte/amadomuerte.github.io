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
    this.updateStorage();
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
    const data = this.state.data;
    for(let i = 0; i < data.length; i++) {
      let item = JSON.stringify(data[i]);
      localStorage.setItem(`item${i}`, item);
    }
  }

  getStorage = () => {
    let storageData = [];

    for(let i = 0; i <= localStorage.length; i++) {
      let item = localStorage.getItem(`item${i}`);
      item = JSON.parse(item);
      storageData.push(item);
    }
    this.setState(() => {
      return {data: storageData}
    });
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

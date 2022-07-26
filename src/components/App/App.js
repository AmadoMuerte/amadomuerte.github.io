import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    let storage = JSON.parse(localStorage.getItem('items'));
    this.state = {
      data:  storage || [],
    }
  }

  addItem = (value) => {
    let str = value.replace(/\s+/g, '');
    
    if (str) {
      let id = Math.floor(Math.random() * 500) + value;

      let item = {value: value, id: id, complete: false, favorite: false}
      this.setState(({data}) => {
        const newArr = [item, ...data];
        return {data: newArr}
      });
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => {
       let newArr = data.filter((item) => {
        return item.id !== id;
       })
       return {data: newArr}
      })
  }

  onComplete = (id, complete) => {
    this.setState(({data}) => {
      
      let newArr = data.map(item => {
        if (item.id === id) {
          item.complete = complete
        }
        return item;
      })

      return {data: newArr}
     })
  }

  onFavorite = (id, favorite) => {
    this.setState(({data}) => {

      let newArr = data.map(item => {
        if (item.id === id) {
          item.favorite = favorite
        }
        return item;
      })

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
      <>
      
        <div className='header'>
          <p>Todo - list</p>
          <Input addItem={this.addItem}/>
        </div>
        
        <main className='main'>
          <TodoList 
            data={data} 
            delete={this.onDelete} 
            onComplete={this.onComplete}
            onFavorite={this.onFavorite}/>
          {this.updateStorage()}
        </main>
        
      </>
      
    );
  }
}


export default App;

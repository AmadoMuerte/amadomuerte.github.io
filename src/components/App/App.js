import React, { Component } from 'react';
import './App.css';

import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    let storage = JSON.parse(localStorage.getItem('items'));
    this.state = {
      data:  storage || [],
      items: 'all',
      showAddForm: false
    }
  }

  addItem = (value) => {
    let str = value.replace(/\s+/g, '');
    
    if (str) {
      let id = Math.floor(Math.random() * 500) + value;

      let item = {value: value, id: id, complete: false, favorite: false}
      this.setState(({data}) => {
        const newArr = [item, ...data];
        return {
          data: newArr,
          items: 'all'
        }
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

  switchItems = (items) => {
    this.setState({
      items: items
    });
  }

  showAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  render() {
    let {data} = this.state

    return (
      <>
      
        <div className='header'>
          <p>Todo - list</p>
         
        </div>
        
        <main className='main'>
          
          <TodoList 
            items={this.switchItems}
            itemsNav={this.state.items}
            data={data} 
            delete={this.onDelete} 
            onComplete={this.onComplete}
            onFavorite={this.onFavorite}
            addItem={this.addItem}
            handleShowAddForm={this.showAddForm}
            showAddForm={this.state.showAddForm}
            />

          {this.updateStorage()}
        </main>
        
      </>
      
    );
  }
}

export default App;


/*
  1) переделать показ инпута на компонент +
  2) добавить строку даты где по умолчанию будет стоять сегодняшняя
  3) сделать окно с красивой надписью таска 
  4) перенести все кнопки редактирования, удаления в окно с таском
  5) добавить кружок на таске по нажатию которого таск будет выполнен
  6) пересмотреть весь код на написание адекватных названий переменных
  7) адаптировать всё под мобильные устройства
  8) сделать выход из окна таска по нажатию вне таска
*/ 



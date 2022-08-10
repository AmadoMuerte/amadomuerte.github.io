import React, { Component } from 'react';
import './App.css';

import TodoList from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
    let storage = JSON.parse(localStorage.getItem('items'));
    this.state = {
      data:  storage || [],
      items: 'all',
      showAddForm: false,
      showItem: {
        switch: false,
        item: []
      }
    }
  }

  addItem = (value, date) => {
    let str = value.replace(/\s+/g, '');
    if (str) {
      let id = uuidv4();
      let item = 
        {
          value: value, 
          id: id, 
          date: date, 
          complete: false, 
          favorite: false
        }
      this.setState(({data}) => {
        const newArr = [item, ...data];
        return {
          data: newArr,
          items: 'all'
        }
      })
    }
  };

  onDelete = (id) => {
    this.setState(({data}) => {
       let newArr = data.filter((item) => {
        return item.id !== id;
       })
       return {data: newArr}
      })
  };

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
  };

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
  };

  updateStorage = () => {
    const data = JSON.stringify(this.state.data);
    localStorage.setItem(`items`, data);
  };

  switchItems = (items) => {
    this.setState({
      items: items
    });
  };

  showAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  };

  swithShowItem = (item) => {
    this.setState({
      showItem: {
        switch: !this.state.showItem.switch,
        item: item
      }
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
            swithShowItem={this.swithShowItem}
            showItem={this.state.showItem}
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
  3) сделать окно с красивой надписью таска +
  4) перенести все кнопки редактирования, удаления в окно с таском +
  5) добавить кружок на таске по нажатию которого таск будет выполнен +
  6) пересмотреть весь код на написание адекватных названий переменных
  7) адаптировать всё под мобильные устройства
  8) сделать выход из окна таска по нажатию вне таска
*/ 



import React from 'react';

import './TodoList.css'; 
import  ListItem from '../TodoItem/TodoItem';
import Navigation from '../Navigation/Navigation';
import ItemForm from '../ItemForm/ItemForm';
import TodoItemShow from '../TodoItemShow/TodoItemShow';


const TodoList = (props) => {

  let onDelete = (id) => {
    props.delete(id);
  }

  let onComplete = (id, complete) => {
    props.onComplete(id, complete);
  }

  let onFavorite = (id, favorite) => {
    props.onFavorite(id, favorite);
  }

  let handleAllItems = () => {
    props.items('all');
  }

  let handleFavoriteItems = () => {
    props.items('favorites');
  }

  let handleCompliteItems = () => {
    props.items('complites');
  }

  let handleShowAddForm = () => {
    props.handleShowAddForm();
  }

  let handleShowItem = () => {
    props.swithShowItem();
  }

  let allItems = () => {
    let items = props.data.map(item => {
    return <ListItem 
            item={item} 
            key={item.id} 
            delete={onDelete} 
            onComplete={onComplete}
            onFavorite={onFavorite}
            handleShowAddForm={handleShowAddForm}
            todoItemShow={todoItemShow}/>

    })
    return items;
  }

  let favoriteItems = () => { 
    let items = props.data.filter(item => item.favorite);
    items = items.map(item => {
      return <ListItem 
                item={item} 
                key={item.id} 
                delete={onDelete} 
                onComplete={onComplete}
                onFavorite={onFavorite}/>
      })
    return items;
  }

  let compliteItems = () => {
    let items = props.data.filter(item => item.complete);
    items = items.map(item => {
      return <ListItem 
                item={item} 
                key={item.id} 
                delete={onDelete} 
                onComplete={onComplete}
                onFavorite={onFavorite}/>
      })
    return items;
  }

  let items = () => {
    let items;
    if (props.itemsNav === 'all') {
        items = allItems();
    } else if (props.itemsNav === 'favorites') {
        items = favoriteItems();
    } else if (props.itemsNav === 'complites') {
      items = compliteItems();
    }
    
    if (items == false) {
      return <p className='list-item__nothing'>у вас нет заметок</p> 
      
    }
    return items;
  }

  let todoItemShow = (item) => {
    props.swithShowItem(item);
  }

  let classMain = '';

  let showForm;
  if (props.showAddForm) {
    classMain += 'list__main-blur'
    showForm = 
      <ItemForm 
        handleShowAddForm={handleShowAddForm} 
        addItem={props.addItem}/>
  }

  let showItem;
  if (props.showItem.switch) {
    let item = props.showItem.item;
    classMain += 'list__main-blur'
    showItem = 
      <TodoItemShow 
        item={item} 
        handleShowAddForm={handleShowItem}/>
  }
  
  return (
    <ul className='list'>
      <div className={classMain}>
        
        <Navigation 
          allItems={handleAllItems} 
          favoriteItems={handleFavoriteItems} 
          compliteItems={handleCompliteItems}
          showAddForm={handleShowAddForm}/>
        {items()}
      </div>
      {showForm}
      {showItem}
      {}
    </ul>
    
  );
}
export default TodoList;

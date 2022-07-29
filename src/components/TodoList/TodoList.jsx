import React from 'react';

import './TodoList.css'; 
import  ListItem from '../ListItem/ListItem';
import Navigation from '../Navigation/Navigation';
import Input from '../Input/Input';


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

  let allItems = () => {
    
    let items = props.data.map(item => {
    return <ListItem 
            item={item} 
            key={item.id} 
            delete={onDelete} 
            onComplete={onComplete}
            onFavorite={onFavorite}/>
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


  let classForm = 'addForm';
  let classMain = '';
  if (props.showAddForm) {
    classForm += ' addFormShow'
    classMain += 'list__main-blur'
  } else {
    classForm = 'addForm'

    classMain = ''
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
      
      <div className={classForm}>
        <Input addItem={props.addItem}/>
        <button className='buttonBack' onClick={handleShowAddForm}>
          x
        </button>
      </div>
    </ul>
    
  );
}

export default TodoList;

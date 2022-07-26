import React from 'react';

import './TodoList.css'; 
import  ListItem from '../ListItem/ListItem';
import Navigation from '../Navigation/Navigation';

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

  let items;

  if (props.data.length >= 1) {
    items = props.data.map(item => {
      return <ListItem 
              item={item} 
              key={item.id} 
              delete={onDelete} 
              onComplete={onComplete}
              onFavorite={onFavorite}/>
    });
  } else {
    items = <p className='list-item__nothing'>в вашем списке ничего нет.</p>
  }

  return (
    <ul className='list'>
      <Navigation />
        {items}
    </ul>
  );
}

export default TodoList;

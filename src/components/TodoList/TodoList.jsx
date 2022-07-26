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

  let handleAllItems = () => {
    props.items('all');
  }

  let handleFavoriteItems = () => {
    props.items('favorites');
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

  let items = () => {
    let items;
    if (props.itemsNav === 'all') {
        items = allItems();
    } else if (props.itemsNav === 'favorites') {
        items = favoriteItems();
    }

    if (items == false) {
      return <p className='list-item__nothing'>Здесь пусто</p>
    }
    return items;
  }

  return (
    <ul className='list'>
      <Navigation allItems={handleAllItems} favoriteItems={handleFavoriteItems}/>
        {items()}
    </ul>
  );
}

export default TodoList;

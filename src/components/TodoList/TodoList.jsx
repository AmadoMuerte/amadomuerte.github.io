import React from 'react';

import './TodoList.css'; 
import  ListItem from '../ListItem/ListItem';

const TodoList = (props) => {

  let onDelete = (id) => {
    props.delete(id);
  }

  let onComplete = (id, complete) => {
    props.onComplete(id, complete);
  }

  let items = props.data.map(item => {
    return <ListItem 
            item={item} 
            key={item.id} 
            delete={onDelete} 
            onComplete={onComplete}/>
  });

  return (
    <ul className='list'>
      {items}
    </ul>
  );
}

export default TodoList;

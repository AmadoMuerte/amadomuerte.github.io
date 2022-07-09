import React from 'react';

import './TodoList.css'; 
import  ListItem from '../ListItem/ListItem';

const TodoList = (props) => {

  let onDelete = (id) => {
    props.delete(id);
  }

  let items = props.data.map(item => {
    return <ListItem item={item} key={item.id} delete={onDelete} />
  });

  return (
    <ul className='list'>
      {items}
    </ul>
  );
}

export default TodoList;

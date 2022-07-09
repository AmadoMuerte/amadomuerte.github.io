import React from 'react';

import './TodoList.css'; 
import  ListItem from '../ListItem/ListItem';

const TodoList = () => {
  return (
    <ul className='list'>
      <ListItem />
    </ul>
  );
}

export default TodoList;

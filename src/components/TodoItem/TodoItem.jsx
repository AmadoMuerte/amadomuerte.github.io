import React from 'react';
import Complete from '../buttons/Complete/Complete';
import './TodoItem.css';

function TodoItem (props) {

  let todoItemShow = () => {
    props.todoItemShow(props.item);
  };

  let onComplete = () => {
    let id = props.item.id;
    let complete = props.item.complete
    props.onComplete(id, !complete);
  };

  let classDescription = '';
  let classLi = 'list__item';
  let classComplete = false;

  if (props.item.complete) {
    classDescription += 'list__item--complete';
    classLi += ' list__item-bg';
    classComplete = true
  }
  
  return (
    <li className={classLi}>
      <p className={classDescription} onClick={todoItemShow}>
        {props.item.value}
      </p>
      <Complete 
        onComplete={onComplete} 
        class={classComplete}
      />
    </li>
  );
}
export default TodoItem;
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

  let value = [...props.item.value];
  if (value.length > 20) {
    value = value.splice(0, 20);
    value[20] = ('...');
  }

  return (
    <li className={classLi}>
      <p className={classDescription} onClick={todoItemShow}>
        {value}
      </p>
      <Complete 
        onComplete={onComplete} 
        class={classComplete}
      />
    </li>
  );
}
export default TodoItem;
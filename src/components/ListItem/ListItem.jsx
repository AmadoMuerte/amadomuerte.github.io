import React from 'react';
import ButtonDelete from '../buttons/ButtonDelete';

import './ListItem.css';

const ListItem = (props) => {

  let onDelete = () => {
    let id = props.item.id;
    return props.delete(id);
  }

  let onComplete = () => {
    let id = props.item.id;
    let complete = props.item.complete
    props.onComplete(id, !complete);
  }

  let classes = '';

  if (props.item.complete) {
    classes += 'list__item--complete';
  }

    return (
      
      <li className='list__item' onClick={onComplete}>
        <p className={classes}>{props.item.value}</p>
        <ButtonDelete delete={onDelete} />
      </li>
      
    );
}
  export default ListItem;

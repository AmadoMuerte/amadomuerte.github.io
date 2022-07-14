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

  let classDescription = '';
  let classLi = 'list__item';

  if (props.item.complete) {
    classDescription += 'list__item--complete';
    classLi += ' list__item-bg';
  }

    return (
      
      <li className={classLi} onClick={onComplete}>
        <p className={classDescription}>{props.item.value}</p>
        
        <ButtonDelete delete={onDelete} />
      </li>
      
    );
}
  export default ListItem;

import React from 'react';
import ButtonDelete from '../buttons/ButtonDelete';

import './ListItem.css';

const ListItem = (props) => {
    
    let onDelete = () => {
       return props.delete(props.item.id);
    }
    return (
        <li className='list__item'>
            <p>{props.item.value}</p>
            <ButtonDelete delete={onDelete}/>
        </li>
    );
}

export default ListItem;

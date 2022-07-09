import React from 'react';
import ButtonDelete from '../buttons/ButtonDelete';

import './ListItem.css';

const ListItem = () => {
    return (
        <li className='list__item'>
            <p>Hello</p>
            <ButtonDelete />
        </li>
    );
}

export default ListItem;

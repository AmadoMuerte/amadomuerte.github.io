import React from 'react';

import './ButtonAdd.css'; 

const ButtonAdd = (props) => {
    return (
        <button className='btn-add' onClick={props.addItem}>
            +
        </button>
    );
}

export default ButtonAdd;

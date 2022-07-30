import React from 'react';
import './ButtonShowForm.css';

const ButtonShowForm = (props) => {
    return (
        <div className='navigation__showForm' onClick={props.showAddForm}/>
    );
}

export default ButtonShowForm;

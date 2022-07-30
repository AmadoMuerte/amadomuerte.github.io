import React from 'react';
import './ItemForm.css';
import Input from '../Input/Input';

const ItemForm = (props) => {
    return (
        <div className={props.classForm}>
            <Input addItem={props.addItem}/>
            <button className='buttonBack' onClick={props.handleShowAddForm}>
                x
            </button>
        </div>
    );
}

export default ItemForm;

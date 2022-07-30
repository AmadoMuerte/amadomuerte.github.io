import React from 'react';
import './ItemForm.css';
import Input from '../Input/Input';

const ItemForm = (props) => {

    return (
        <div className={props.classForm}>
            <Input 
                addItem={props.addItem} 
                handleShowAddForm={props.handleShowAddForm}/>
            <button className='buttonBack' onClick={props.handleShowAddForm}>
                x
            </button>
            <input className='form-date' type='date'/>
            
        </div>
    );
}

export default ItemForm;

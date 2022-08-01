import React from 'react';
import './ItemForm.css';
import Input from '../Input/Input';
import InputDate from '../InputDate/InputDate';
import ButtonBack from '../buttons/ButtonBack/ButtonBack';

const ItemForm = (props) => {

    return (
        <div className='addForm'>
            <Input 
                addItem={props.addItem} 
                handleShowAddForm={props.handleShowAddForm}/>
            <ButtonBack handleShowAddForm={props.handleShowAddForm}/>
            <InputDate />
        </div>
    );
}

export default ItemForm;

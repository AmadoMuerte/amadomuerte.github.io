import React from 'react';
import ButtonBack from '../buttons/ButtonBack/ButtonBack';
import InputDate from '../InputDate/InputDate';

import './TodoItemShow.css';

const TodoItemShow = (props) => {
    return (
        <div className='todoItemShow'>
            <p>{props.item.value}</p>
            <InputDate date={props.item.date}/>
            <ButtonBack handleShowAddForm={props.handleShowAddForm}/>
        </div>
    );
}

export default TodoItemShow;

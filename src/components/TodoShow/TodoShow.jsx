import React from 'react';
import ButtonBack from '../buttons/ButtonBack/ButtonBack';
import InputDate from '../InputDate/InputDate';

const TodoShow = (props) => {
    return (
        <div>
            <p>{props.item.value}</p>
            <InputDate date={props.item.date}/>
            <ButtonBack handleShowAddForm={props.handleShowAddForm}/>
        </div>
    );
}

export default TodoShow;

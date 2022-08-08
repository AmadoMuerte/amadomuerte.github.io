import React from 'react';

import ButtonBack from '../buttons/ButtonBack/ButtonBack';
import ButtonDelete from '../buttons/ButtonDelete/ButtonDelete';
import ButtonFavorites from '../buttons/ButtonFavorites/ButtonFavorites';
import InputDate from '../InputDate/InputDate';

import './TodoItemShow.css';

const TodoItemShow = (props) => {

  let onDelete = () => {
    let id = props.item.id;
    props.handleShowAddForm();
    return props.delete(id);
  }

  let onFavorite = () => {
    let id = props.item.id;
    let favorite = props.item.favorite
    props.onFavorite(id, !favorite);
  }

  let classFavorite = '';
    if (props.item.favorite) {
      classFavorite += ' classFavorite';
    }

  return (
    <div className='todoItemShow'>
      <p>{props.item.value}</p>
      <InputDate date={props.item.date} />
      <ButtonBack handleShowAddForm={props.handleShowAddForm} />
      <div className="buttons">
        <ButtonFavorites
          favorite={onFavorite}
          classFavorite={classFavorite} />
        <ButtonDelete delete={onDelete} />
      </div>
    </div>
  );
}

export default TodoItemShow;

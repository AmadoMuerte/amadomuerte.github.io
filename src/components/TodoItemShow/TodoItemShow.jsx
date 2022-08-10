import React from 'react';

import ButtonBack from '../buttons/ButtonBack/ButtonBack';
import ButtonDelete from '../buttons/ButtonDelete/ButtonDelete';
import ButtonFavorites from '../buttons/ButtonFavorites/ButtonFavorites';

import './TodoItemShow.css';

const TodoItemShow = (props) => {

  let onDelete = () => {
    let id = props.item.id;
    props.handleShowAddForm();
    return props.delete(id);
  };

  let onFavorite = () => {
    let id = props.item.id;
    let favorite = props.item.favorite
    props.onFavorite(id, !favorite);
  };

  let classFavorite = '';
    if (props.item.favorite) {
      classFavorite += ' classFavorite';
    };

  let defaultDate = 'Нет даты'
  if (props.item.date) {
    defaultDate = props.item.date;
  };

  let {handleShowAddForm} = props
  return (
    <div className='todoItemShow'>
      <p>{props.item.value}</p>
      <input 
        type='input' 
        defaultValue={defaultDate} 
        className='form-date'
      />
      <ButtonBack handleShowAddForm={handleShowAddForm}/>
      <div className="buttons">
        <ButtonFavorites
          favorite={onFavorite}
          classFavorite={classFavorite} 
        />
        <ButtonDelete delete={onDelete} />
      </div>
    </div>
  );
}

export default TodoItemShow;

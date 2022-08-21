import React from 'react';

import './ButtonAdd.css';

import useSound from 'use-sound';

import createTodo from '../../../sound/create-todo.mp3';

const ButtonAdd = (props) => {

  const [play] = useSound(createTodo);

  let btnClick = () => {
    props.addItem();
    props.handleShowAddForm();
    play();
  }



  return (
    <button 
      className='btn-add' 
      onClick={btnClick}
    >
      +
    </button>
  );
}

export default ButtonAdd;

import React from 'react';
import ButtonAdd from '../buttons/ButtonAdd';
import './Input.css';

const Input = () => {
  return (
    <div>
      <input className='input' type={'text'} placeholder={'...'}></input>
      <ButtonAdd />
    </div>
  );
}

export default Input;

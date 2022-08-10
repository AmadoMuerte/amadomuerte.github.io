import React from 'react';

import image from './pen-solid.svg';

import './ButtonEdit.css'

const ButtonEdit = (props) => {

  return (
    <button 
      className='btnEdit' 
      onClick={props.funcEdit}
    >
      <img src={image} alt="pen" />
    </button>
  );
}

export default ButtonEdit;

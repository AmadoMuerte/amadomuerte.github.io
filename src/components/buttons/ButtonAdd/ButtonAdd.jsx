import React from 'react';

import './ButtonAdd.css';

const ButtonAdd = (props) => {

  let btnClick = () => {
    props.addItem();
    props.handleShowAddForm();
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

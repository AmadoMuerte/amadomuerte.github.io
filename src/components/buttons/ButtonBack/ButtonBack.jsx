import React from 'react';

import './ButtonBack.css';

const ButtonBack = (props) => {
  return (
    <button 
      className='buttonBack' 
      onClick={props.handleShowAddForm}
    >
      x
    </button>
  );
}

export default ButtonBack;

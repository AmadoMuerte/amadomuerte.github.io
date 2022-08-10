import React from 'react';

import './ButtonDelete.css';

const ButtonDelete = (props) => {
  return (
    <button 
    className='btn-delete' 
    onClick={props.delete}
    >
      X
    </button>
  );
}

export default ButtonDelete;

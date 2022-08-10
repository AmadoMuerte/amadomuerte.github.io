import React from 'react';
import './ButtonShowForm.css';

const ButtonShowForm = ({showAddForm}) => {
  return (
    <div 
      className='navigation__showForm' 
      onClick={showAddForm} 
    />
  );
}

export default ButtonShowForm;

import React from 'react';
import './ButtonShowForm.css';

import useSound from 'use-sound'

import showFormSound from '../../../sound/navSound.mp3';

const ButtonShowForm = ({showAddForm}) => {

  const [play] = useSound(showFormSound);

  let pushBtn = () => {
    showAddForm();
    play();
  }

  return (
    <div 
      className='navigation__showForm' 
      onClick={pushBtn} 
    />
  );
}

export default ButtonShowForm;

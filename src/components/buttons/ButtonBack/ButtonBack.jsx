import React from 'react';

import './ButtonBack.css';

import useSound from 'use-sound';

import closeSound from '../../../sound/close-sound.mp3';

const ButtonBack = (props) => {

  const [play] = useSound(closeSound);
  const pushBtn = () => {
    props.handleShowAddForm();
    play();
  }

  return (
    <button 
      className='buttonBack' 
      onClick={pushBtn}
    >
      x
    </button>
  );
}

export default ButtonBack;

import React from 'react';

import './Complete.css';

import useSound from 'use-sound';

import completeSound from '../../../sound/complete-sound.mp3'; 

const Complete = (props) => {

  let classes = 'complete-btn ';
  if (props.class) {
    classes += 'complete';
  }

  const [play] = useSound(completeSound);

  let pushBtn = () => {
    props.onComplete();
    if (classes === 'complete-btn ') {
      play();
    }
  }

  return (
    <button 
      className={classes}
      onClick={pushBtn}>
    </button>
  );
}

export default Complete;

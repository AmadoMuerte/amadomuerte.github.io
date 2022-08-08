import React from 'react';

import './Complete.css';

const Complete = (props) => {

  let classes = 'complete-btn ';
  if (props.class) {
    classes += 'complete';
  }

  return (

    <button 
      className={classes}
      onClick={props.onComplete}>
    </button>
  );
}

export default Complete;

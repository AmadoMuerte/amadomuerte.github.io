import React from 'react';

import './ButtonFavorites.css';
import image from './bookmark-solid.svg';

const ButtonFavorites = ({classFavorite, favorite}) => {

  let classes = 'btnFavorites';
  if (classFavorite) {
    classes = 'btnFavorites' + classFavorite;
  }

  return (
    <div 
      className={classes} 
      onClick={favorite}
    >
      <img src={image} alt="" />
    </div>
  );
}

export default ButtonFavorites;

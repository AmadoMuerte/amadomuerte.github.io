import React from 'react';

import './ButtonFavorites.css';
import image from './bookmark-solid.svg';

import useSound from 'use-sound';
import favoriteSound from '../../../sound/favorite.mp3';

const ButtonFavorites = ({classFavorite, favorite}) => {

  let classes = 'btnFavorites';
  if (classFavorite) {
    classes = 'btnFavorites' + classFavorite;
  }

  const [play] = useSound(favoriteSound);

  const btnPush = () => {
    favorite();
    play();
  }

  return (
    <div 
      className={classes} 
      onClick={btnPush}
    >
      <img src={image} alt="" />
    </div>
  );
}

export default ButtonFavorites;

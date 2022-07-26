import React from 'react';

import './ButtonFavorites.css';
import image  from './bookmark-solid.svg';

const ButtonFavorites = (props) => {

    let classes = 'btnFavorites';

    if (props.classFavorite) {
        classes = 'btnFavorites' + props.classFavorite;
    }
    

    return (
        <div className={classes} onClick={props.favorite}>
            <img src={image} alt="" />
        </div>
    );
}

export default ButtonFavorites;

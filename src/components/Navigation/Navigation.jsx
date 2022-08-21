import React from 'react';

import './Navigation.css';
import ButtonShowForm from '../buttons/ButtonShowForm/ButtonShowForm';

import useSound from 'use-sound';

import navSound from '../../sound/navSound.mp3';

const Navigation = (props) => {

  const [play] = useSound(navSound);

  let showAddForm = () => {
    props.showAddForm();
  }
  
  let allItems = () => {
    props.allItems();
    play();
  }

  let favoriteItems = () => {
    props.favoriteItems();
    play();
  }

  let compliteItems = () => {
    props.compliteItems();
    play();
  }

  return (

    <div className='navigation'>
      <div className='navigation__buttons'>
        <button onClick={allItems}>все</button>
        <button onClick={favoriteItems}>избранное</button>
        <button onClick={compliteItems}>выполнено</button>
      </div>
      <ButtonShowForm showAddForm={showAddForm}/>
    </div>

  );
}

export default Navigation;


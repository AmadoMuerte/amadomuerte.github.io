import React from 'react';

import './Navigation.css';
import ButtonShowForm from '../buttons/ButtonShowForm/ButtonShowForm';

const Navigation = (props) => {

  let showAddForm = () => {
    props.showAddForm();
  }


  let {allItems, favoriteItems, compliteItems} = props;
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


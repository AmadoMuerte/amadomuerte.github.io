import React from 'react';
import ButtonShowForm from '../buttons/ButtonShowForm/ButtonShowForm';

import './Navigation.css';

const Navigation = (props) => {

    let showAddForm = () => {
        props.showAddForm();
    }

    return (
        
        <div className='navigation'>
            <div className='navigation__buttons'>
                <button onClick={props.allItems}>все</button>
                <button onClick={props.favoriteItems}>избранное</button>
                <button onClick={props.compliteItems}>выполнено</button>
            </div>
            <ButtonShowForm showAddForm={showAddForm}/>
        </div>
        
    );
}

export default Navigation;


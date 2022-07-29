import React from 'react';

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
            <div className='navigation__showForm' onClick={showAddForm}/>
        </div>
        
    );
}

export default Navigation;


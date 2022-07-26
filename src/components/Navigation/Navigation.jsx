import React from 'react';

import './Navigation.css';

const Navigation = (props) => {

    return (
        
        <div className='navigation'>
            <div className='navigation__buttons'>
                <button onClick={props.allItems}>все</button>
                <button onClick={props.favoriteItems}>избранное</button>
            </div>
        </div>
        
    );
}

export default Navigation;


import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        return (
            <div className='navigation'>
                <div className='navigation__buttons'>
                    <button>все</button>
                    <button>избранное</button>
                </div>
            </div>
        );
    }
}

export default Navigation;

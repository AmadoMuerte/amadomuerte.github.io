import React, { Component } from 'react';
import './InputDate.css'

class InputDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    changeValue =(e) => {
        this.setState({
            value: e.value
        })
    }

    addDate = () => {   
        this.props.addDate(this.state.value);
    }

    render() {

        return (
            <input 
                className='form-date' 
                type='date' 
                onChange={this.changeValue} 
                value={this.state.value}/>
        );
    }
}

export default InputDate;

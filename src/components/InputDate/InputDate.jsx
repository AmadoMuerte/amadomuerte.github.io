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
            value: e.target.value
        })
        this.getDate();
    }

    getDate = () => {   
        this.props.getDate(this.state.value);
    }

    render() {
        return (
            <input 
                placeholder='введите дату'
                className='form-date' 
                type='input' 
                onChange={this.changeValue}
                value={this.state.value}/>
        );
    }
}

export default InputDate;

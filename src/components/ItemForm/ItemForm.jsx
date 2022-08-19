
import React, { Component } from 'react';
import './ItemForm.css';
import Input from '../Input/Input';
import InputDate from '../InputDate/InputDate';
import ButtonBack from '../buttons/ButtonBack/ButtonBack';
import ButtonAdd from '../buttons/ButtonAdd/ButtonAdd';


class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      date: ''
    }
  }
  getValue = (value) => {
    this.setState({
      value: value
    })
  };

  getDate = (date) => {
    this.setState({
      date: date
    })
  };

  addItem = () => {
    let value = this.state.value
    let date = this.state.date
    this.props.addItem(value, date);
  };

  render() {
    let {handleShowAddForm} = this.props
    return (
      <div className='form'>
        <div>
          <Input
            getValue={this.getValue}
            handleShowAddForm={handleShowAddForm} 
          />
          <ButtonAdd
            addItem={this.addItem}
            handleShowAddForm={handleShowAddForm} 
          />
        </div>
        <ButtonBack handleShowAddForm={handleShowAddForm}/>
        <InputDate getDate={this.getDate}/>
      </div>
    );
  }
}
export default ItemForm;
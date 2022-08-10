
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
  }

  getDate = (date) => {
    this.setState({
      date: date
    })
  }

  addItem = () => {
    let value = this.state.value
    let date = this.state.date
    this.props.addItem(value, date);
  }

  render() {
    return (
      <div className='addForm'>
        <div>
          <Input
            getValue={this.getValue}
            handleShowAddForm={this.props.handleShowAddForm} />
          <ButtonAdd
            addItem={this.addItem}
            handleShowAddForm={this.props.handleShowAddForm} />
        </div>
        <ButtonBack handleShowAddForm={this.props.handleShowAddForm} />
        <InputDate
          getDate={this.getDate} />
      </div>
    );
  }
}
export default ItemForm;
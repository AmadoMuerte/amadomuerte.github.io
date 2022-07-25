
import ButtonDelete from '../buttons/ButtonDelete';

import './ListItem.css';

import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverClass: 'hoverClass'
    }
  }

  onDelete = () => {
    let id = this.props.item.id;
    return this.props.delete(id);
  }

  onComplete = () => {
    let id = this.props.item.id;
    let complete = this.props.item.complete
    this.props.onComplete(id, !complete);
  }

  onMouseEnter = () => {
    this.setState({
      hoverClass: 'hoverClass'
    })
  }

  onMouseOver = () => {
    this.setState({
      hoverClass: ''
    })
  }

  render() {
    
    let classDescription = '';
    let classLi = 'list__item';

    if (this.props.item.complete) {
      classDescription += 'list__item--complete';
      classLi += ' list__item-bg';
    }
    
    let hoverClass = this.state.hoverClass

    return (
      <li 
        className={classLi} 
        onClick={this.onComplete} 
        onMouseEnter={this.onMouseOver}
        onMouseLeave={this.onMouseEnter}>

        <p className={classDescription}>{this.props.item.value}</p>
        <div className={hoverClass}>
          <ButtonDelete delete={this.onDelete} />
        </div>
      </li>
    );
  }
}
export default ListItem;
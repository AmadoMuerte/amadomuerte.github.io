import React, { Component } from 'react';
import './TodoItem.css';

import ButtonDelete from '../buttons/ButtonDelete/ButtonDelete';
import ButtonEdit from '../buttons/ButtonEdit/ButtonEdit';
import ButtonFavorites from '../buttons/ButtonFavorites/ButtonFavorites';


class TodoItem extends Component {
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
      hoverClass: 'buttons'

    })
  }

  onFavorite = () => {
    let id = this.props.item.id;
    let favorite = this.props.item.favorite
    this.props.onFavorite(id, !favorite);
  }

  todoItemShow = () => {
    this.props.todoItemShow(this.props.item);
  }

  render() {
    
    let classDescription = '';
    let classLi = 'list__item';

    if (this.props.item.complete) {
      classDescription += 'list__item--complete';
      classLi += ' list__item-bg';
    }
    
    let hoverClass = this.state.hoverClass
    
    let classFavorite = '';
    if (this.props.item.favorite) {
      classFavorite += ' classFavorite';
    }

    return (
      <li 
        className={classLi} 
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseEnter}>
        <p 
          onClick={this.todoItemShow}
          className={classDescription}
          >

            {this.props.item.value}
        </p>
        
        <div className={hoverClass}>
          <ButtonFavorites  favorite={this.onFavorite} classFavorite={classFavorite}/>
          <ButtonEdit />
          <ButtonDelete delete={this.onDelete} />
          
        </div>
        
        
      </li>
    );
  }
}
export default TodoItem;

//


// this.onComplete
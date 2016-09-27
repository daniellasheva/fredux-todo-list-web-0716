import React from 'react';

class ToDoList extends React.Component{
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteItem= this.deleteItem.bind(this)
  }

  onSubmit(event){
    event.preventDefault()
    let action = {type: 'ADD_TODO', payload: {title: event.target.firstChild.value}}
    this.props.store.dispatch(action)
    event.target.firstChild.value = ""
   }

   deleteItem(event){
     let action = {type: 'DELETE_ITEM', payload: {id: event.target.id}}
      this.props.store.dispatch(action)
   }

  render(){
    return(
      <div>
        <h2>What do you have to do today?</h2>
        <ul>
          {this.props.store.getState().map((item, index)=>{
            return <li>{item.title} <button id={index} onClick={this.deleteItem}>Delete Item</button></li>
          })}
        </ul>
        <form onSubmit={this.onSubmit}>
          <input></input>
        </form>
      </div>
    )
  }
}

export default ToDoList

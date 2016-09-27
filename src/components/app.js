import React from 'react';

class ToDoList extends React.Component{
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault()
    let action = {type: 'ADD_TODO', payload: {title: event.target.firstChild.value}}
    this.props.store.dispatch(action)
    event.target.firstChild.value = ""
   }

  render(){
    return(
      <div>
        <ul>
          {this.props.store.getState().map((item)=>{
            return <li>{item.title}</li>
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

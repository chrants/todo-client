import React, { Component } from 'react';
import './TodoList.css';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const FILTER_TYPES = {
  ALL: 0,
  DEFAULT: 1,
  REMOVED: 2
};

class TodoList extends Component {
  state = {
    viewing: FILTER_TYPES.DEFAULT
  }

  setTodoFilter = (toShow) => {
    if(this.state.viewing === toShow)
      return;

    this.setState({ viewing: toShow });
  }

  render() {
    const theTodos = this.props.todos, removedTodos = this.props.removedTodos;
    let todos;
    switch(this.state.viewing) {
      case FILTER_TYPES.ALL:
        todos = theTodos.merge(removedTodos);
        break;
      case FILTER_TYPES.DEFAULT:
        todos = theTodos;
        break;
      case FILTER_TYPES.REMOVED:
        todos = removedTodos;
        break;
      default:
        throw Error("Todo viewing type invalid");
    } 

    return (
      <div className="TodoList">
        <AddTodo onTodoAdd={this.props.onTodoAdd} />
        <ul className="list-inline">
          <li>
            <a href="#" onClick={_ => this.setTodoFilter(FILTER_TYPES.ALL)}>All</a>
          </li>
          <li>
            <a href="#" onClick={_ => this.setTodoFilter(FILTER_TYPES.DEFAULT)}>Default</a>
          </li>
          <li>
            <a href="#" onClick={_ => this.setTodoFilter(FILTER_TYPES.REMOVED)}>Removed</a>
          </li>
        </ul>
        <ul className="TodoList-items">
            {todos.map(todo => 
              <TodoItem
                todo={todo}
                onTodoDelete={this.props.onTodoDelete}
                onTodoClick={this.props.onTodoClick}
                onTodoUpdate={this.props.onTodoUpdate} />
            )}  
        </ul>
      </div>
    );
  }
}

export default TodoList;

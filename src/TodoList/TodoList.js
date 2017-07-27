import React, { Component } from 'react';
import './TodoList.css';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <AddTodo onTodoAdd={this.props.onTodoAdd} />
        <ul className="TodoList-items">
            {this.props.todos.map(todo => <TodoItem todo={todo} onTodoDelete={this.props.onTodoDelete} onTodoClick={this.props.onTodoClick} />)}  
        </ul>
      </div>
    );
  }
}

export default TodoList;

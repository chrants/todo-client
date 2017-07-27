import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        let todo = this.props.todo;
        return (
            <li className="TodoItem">
                <button onClick={() => this.props.onTodoDelete(todo.id)}>x</button>
                <input onClick={() => this.props.onTodoClick(todo.id)} checked={todo.completed} type="checkbox"/>
                <span>{todo.text}</span>
            </li>
        );
    }
}

export default TodoItem;

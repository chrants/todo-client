import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    state = {
        text: this.props.todo.text
    }

    render() {
        let todo = this.props.todo;
        return (
            <li className="TodoItem">
                <button onClick={() => this.props.onTodoDelete(todo.id)} className="show-hover">x</button>
                <input onClick={() => this.props.onTodoClick(todo.id)} checked={todo.completed} type="checkbox"/>
                <input onBlur={(e) => todo.text !== this.state.text && this.props.onTodoUpdate(todo.id, this.state.text)} onChange={(e) => this.setState({ text: e.target.value })} value={this.state.text} className="no-border" />
            </li>
        );
    }
}

export default TodoItem;

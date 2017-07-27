import React, { Component } from 'react';
//import './AddTodo.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onTodoAdd(this.input.value);
        this.input.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" defaultValue="" ref={(input) => this.input = input}/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default AddTodo;

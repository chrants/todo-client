import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

import TodoListContainer from './TodoList/TodoListContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><span className="App-logo" alt="logo">Todo List</span></h1>
          <h2>Simple Todo List Application</h2>
        </div>
        <div className="App-intro">
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;

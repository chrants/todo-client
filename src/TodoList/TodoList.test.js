import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

import { __createStore } from '../store/store';

const Store = __createStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={Store.getState().get('todos')} />, div);
});

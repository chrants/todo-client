import { Record } from 'immutable';

const Todo = Record({ id: -1, text: "", completed: false }, "Todo");

export default Todo;
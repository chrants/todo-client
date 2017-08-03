import { connect } from 'react-redux';

import * as Actions from '../store/actions';
import TodoList from './TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.get('todos'),
        removedTodos: state.get('removedTodos')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoAdd: (text) => {
            dispatch(Actions.addTodo(text));
        },
        onTodoClick: (id) => {
            dispatch(Actions.toggleTodo(id));
        },
        onTodoDelete: (id) => {
            dispatch(Actions.removeTodo(id));
        },
        onTodoUpdate: (id, text) => {
            dispatch(Actions.updateTodo(id, text))
        }
    }
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;

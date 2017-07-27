import { Map, OrderedMap } from 'immutable';

import { TYPES } from './actions';
import Todo from './Todo';

const defaultState = Map({
    todoCounter: 0,
    todos: OrderedMap({}),
    removedTodos: Map({})
});

export const mainReducer = (state=defaultState, action) => {
    switch(action.type) {
// WARNING: Fix todo counter on setting todos
case TYPES.SET_TODOS: {
        return state.set('todos', OrderedMap(action.payload)); }
case TYPES.ADD_TODO: {
        let id = state.get('todoCounter')
          , text = action.payload;
        return state.mergeDeep({ todoCounter: id + 1, todos: Map([[id, new Todo({ id, text })]])}); }
case TYPES.REMOVE_TODO: {
        let id = action.payload
          , todo = state.getIn(["todos", id]);
        return state.removeIn(["todos", id]).setIn(["removedTodos", id], todo); }
case TYPES.TOGGLE_TODO: {
        let id = action.payload
          , todo = state.getIn(["todos", id]);
        return state.setIn(['todos', id, 'completed'], !todo.completed); }
case TYPES.UPDATE_TODO: {
        let id = action.payload.id
          , text = action.payload.text;
        return state.updateIn(["todos", id], todo => todo.set('text', text)); }
default: {
        return state; }            
    }
};

const _Map = window.Map;
import { Map } from 'immutable';

import { __createStore } from './store';
import * as Actions from './actions';

import Todo from './Todo';

let Store;
const resetStore = () => {
    Store = __createStore();
};

const arrToMap = (arr, mapFn) => Map(arr.map(mapFn));

const sampleTodos1 = arrToMap([
    "Hello World!",
    "I am a todo item."
], (v, i) => [i, (new Todo({ id: i, text: v }))]);

beforeEach(() => {
    resetStore();
});

it("Sets todos", () => {
    Store.dispatch(Actions.setTodos(sampleTodos1));    
    expect(new Map(Store.getState().get("todos"))).toEqual(sampleTodos1);    
});

it("Adds todos", () => {
    for(let todo of sampleTodos1.values()) { Store.dispatch(Actions.addTodo(todo.text)); }    
    expect(new Map(Store.getState().get("todos"))).toEqual(sampleTodos1);        
});

it("Removes todos", () => {
    let todos = new _Map(sampleTodos1);
    for(let todo of sampleTodos1.values()) { Store.dispatch(Actions.addTodo(todo.text)); } 
    Store.dispatch(Actions.removeTodo(0));
    let myTodo = todos.get(0);
    todos.delete(0);
    expect(new _Map(Store.getState().get("todos"))).toEqual(todos);
    expect(Store.getState().get('removedTodos')).toEqual(Map([[0, myTodo]]));       
});

it("Updates todos", () => {
    let todos = new _Map(sampleTodos1);
    for(let todo of sampleTodos1.values()) { Store.dispatch(Actions.addTodo(todo.text)); } 
    Store.dispatch(Actions.updateTodo(0, "Goodbye!"));
    todos.set(0, todos.get(0).set('text', "Goodbye!"));
    expect(new _Map(Store.getState().get("todos"))).toEqual(todos);        
});

it("Toggles todos", () => {
    let todos = new _Map(sampleTodos1);
    for(let todo of sampleTodos1.values()) { Store.dispatch(Actions.addTodo(todo.text)); } 
    Store.dispatch(Actions.toggleTodo(0));
    todos.set(0, todos.get(0).set('completed', true));
    expect(new _Map(Store.getState().get("todos"))).toEqual(todos);        
});

export const TYPES = {
    SET_TODOS: "SET_TODOS",
    ADD_TODO: "ADD",
    REMOVE_TODO: "REMOVE",
    UPDATE_TODO: "UPDATE",
    TOGGLE_TODO: "TOGGLE"
};

export const setTodos = (todos) => {
    return {
        type: TYPES.SET_TODOS,
        payload: todos
    };
};

export const addTodo = (text) => {
    return {
        type: TYPES.ADD_TODO,
        payload: text
    };
};

export const removeTodo = (id) => {
    return {
        type: TYPES.REMOVE_TODO,
        payload: id
    };
};

export const updateTodo = (id, text) => {
    return {
        type: TYPES.UPDATE_TODO,
        payload: { id, text }
    };
};

export const toggleTodo = (id) => {
    return {
        type: TYPES.TOGGLE_TODO,
        payload: id
    };
};

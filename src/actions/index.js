import * as proType from '../constants';

let nextTodoId = 0;

export const addTodo = text => ({
    type: proType.ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: proType.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: proType.TOGGLE_TODO,
    id
});
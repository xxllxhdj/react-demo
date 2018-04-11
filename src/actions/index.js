import * as proType from '../constants';

let nextTodoId = 0;

export const addTodo = text => ({
    type: proType.ADD_TODO,
    id: nextTodoId++,
    text
});

function getTodo(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 100);
    });
}

export const fetchTodo = text => {
    return dispatch => {
        return getTodo(text).then(t => dispatch(addTodo(t)));
    };
};

export const setVisibilityFilter = filter => ({
    type: proType.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: proType.TOGGLE_TODO,
    id
});
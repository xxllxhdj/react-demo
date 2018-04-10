import Immutable from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from '../constants';

const todos = (state = [], action) => {
    let items;
    switch (action.type) {
        case ADD_TODO:
            items = Immutable.List(state);
            items = items.push({
                id: action.id,
                text: action.text,
                completed: false
            });
            return items.toJS();
            // return [
            //     ...state,
            //     {
            //         id: action.id,
            //         text: action.text,
            //         completed: false
            //     }
            // ];
        case TOGGLE_TODO:
            items = Immutable.List(state);
            items = items.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return items.toJS();
            // return state.map(todo =>
            //     (todo.id === action.id)
            //         ? { ...todo, completed: !todo.completed }
            //         : todo
            // );
        default:
            return state;
    }
};

export default todos
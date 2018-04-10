import React, { Component } from 'react';

import AddTodo from '../containers/addTodo';
import FilterLink from '../containers/filterLink';
import VisibleTodoList from '../containers/visibleTodoList';

export class Todox extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <p>
                    Show:
                    {' '}
                    <FilterLink filter="SHOW_ALL">
                        All
                    </FilterLink>
                    {', '}
                    <FilterLink filter="SHOW_ACTIVE">
                        Active
                    </FilterLink>
                    {', '}
                    <FilterLink filter="SHOW_COMPLETED">
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
};

export default Todox;

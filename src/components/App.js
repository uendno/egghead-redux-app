import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import FilterLink from './FilterLink';


const App = () => {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    )
};


const Footer = ({
    store
}) => {
    return (
        <p>
            Show:
            {', '}
            <FilterLink filter='all'>
                All
            </FilterLink>
            {', '}
            <FilterLink filter='active'>
                Active
            </FilterLink>
            {', '}
            <FilterLink filter='completed'>
                Completed
            </FilterLink>
        </p>
    )
};


export default App;

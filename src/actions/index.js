import {getIsFetching} from '../reducers';
import * as api from '../api';
import {normalize} from 'normalizr';
import * as schema from './schema';

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(response => {
        dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            filter,
            response: normalize(response, schema.arrayOfTodos)
        });
    }, error => {

        dispatch({
            type: 'FETCH_TODOS_FAILURE',
            filter,
            message: error.message || 'Some thing went wrong.'
        })
    });
};


export const addTodo = (text) => (dispatch) => {
    return api.addTodo(text).then(response => {

        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response: normalize(response, schema.todo)
        })
    })
};

export const toggleTodo = (id) => (dispatch) => {
    return api.toggleTodo(id).then(todo => {
        dispatch({
            type: 'TOGGLE_TODO_SUCCESS',
            id: id
        })
    });
};

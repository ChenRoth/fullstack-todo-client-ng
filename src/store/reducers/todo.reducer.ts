import { createReducer, on } from '@ngrx/store';
import { receiveTodos, fetchTodos, receiveCreatedTodo } from '../actions/todo.actions';
import { ITodo } from '../../models/todo.model';

export interface ITodoState {
    items: ITodo[];
    isLoading: boolean;
}

const initialState: ITodoState = {
    items: [],
    isLoading: false,
}

export const todoReducer = createReducer(initialState,
    on(fetchTodos, (state) => ({ ...state, isLoading: true })),
    on(receiveTodos, (state, { todos }) => ({ ...state, isLoading: false, items: todos })),
    on(receiveCreatedTodo, (state, { todo }) => ({ ...state, items: state.items.concat(todo) }))
);

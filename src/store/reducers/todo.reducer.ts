import { createReducer, on } from '@ngrx/store';
import { receiveTodos } from '../actions/todo.actions';

export interface ITodoState {
    items: ITodo[];
    isLoading: boolean;
}

const initialState: ITodoState = {
    items: [],
    isLoading: false,
}

export const todoReducer = createReducer(initialState,
    on(receiveTodos, (state, { todos }) => ({ ...state, items: todos })),
);
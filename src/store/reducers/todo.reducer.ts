import { createReducer, on } from '@ngrx/store';
import { receiveTodos, fetchTodos, receiveCreatedTodo, deletedTodo, toggledTodo } from '../actions/todo.actions';
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
    on(receiveCreatedTodo, (state, { todo }) => ({ ...state, items: state.items.concat(todo) })),
    on(deletedTodo, (state, { todoId }) => ({
        ...state,
        items: state.items.filter(i => i._id !== todoId)
    })),
    on(toggledTodo, (state, { todoId }) => {
        const items = state.items.slice();
        const index = items.findIndex(i => i._id === todoId);
        items[index] = {...items[index], isComplete: !items[index].isComplete };
        return {
            ...state,
            items,
        };
    })
);

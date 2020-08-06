import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/models/todo.model';

export const fetchTodos = createAction('GET_TODOS_PENDING');
export const receiveTodos = createAction('GET_TODOS_SUCCESS', props<{ todos: ITodo[] }>());

export const createTodo = createAction('CREATE_TODO_PENDING', props<Omit<ITodo, '_id' | 'isComplete'>>());
export const receiveCreatedTodo = createAction('CREATE_TODO_SUCCESS', props<{todo: ITodo}>());

export const deleteTodo = createAction('DELETE_TODO_PENDING', props<{ todoId: string }>());
export const deletedTodo = createAction('DELETE_TODO_SUCCESS', props<{ todoId: string }>());

export const toggleTodo = createAction('TOGGLE_TODO_PENDING', props<{ todoId: string }>());
export const toggledTodo = createAction('TOGGLE_TODO_SUCCESS', props<{ todoId: string }>());

import { createAction, props } from '@ngrx/store';

export const fetchTodos = createAction('GET_TODOS_PENDING');
export const receiveTodos = createAction('GET_TODOS_SUCCESS', props<{ todos: ITodo[] }>());

import { createAction, props } from '@ngrx/store';

export const startRegister = createAction('REGISTER_PENDING', props<{ username: string; password: string; email: string; }>());

export const startLogin = createAction('LOGIN_PENDING', props<{ username: string; password: string; }>());
export const completeLogin = createAction('LOGIN_SUCCESS', props<{ username: string; }>());


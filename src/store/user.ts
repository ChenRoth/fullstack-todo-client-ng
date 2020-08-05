import { createReducer, on } from '@ngrx/store';
import { completeLogin } from 'src/actions/actions';

export interface IUserState {
    isLoggedIn: boolean;
    username: string;
}

const initialState: IUserState = {
    isLoggedIn: false,
    username: '',
}

export const userReducer = createReducer(initialState,
    on(completeLogin, (state, { username }) => ({ ...state, isLoggedIn: true, username })),
);
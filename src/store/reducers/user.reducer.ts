import { createReducer, on } from '@ngrx/store';
import { completeLogin, logout } from '../actions/user.actions';

export interface IUserState {
    isLoggedIn: boolean;
    username: string;
}

const getInitialState = (): IUserState => {
    const token = localStorage.getItem('token');
    return {
        isLoggedIn: !!token,
        username: '',
    };
};

export const userReducer = createReducer(getInitialState(),
    on(completeLogin, (state, { username }) => ({ ...state, isLoggedIn: true, username })),
    on(logout, () => getInitialState()),
);
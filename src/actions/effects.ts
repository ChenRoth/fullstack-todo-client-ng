import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { completeLogin, startLogin, startRegister } from './actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(startLogin),
            mergeMap(action =>
                this.userService.login(action.username, action.password)
                    .pipe(
                        map(({ token }) => {
                            localStorage.setItem('token', token);
                            return completeLogin({ username: action.username });
                        }),
                        catchError((error: Error) => {
                            return of({ type: 'error' });
                        })
                    )
            )
        )
    );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(startRegister),
            mergeMap(action =>
                this.userService.register(action.username, action.password, action.email)
                    .pipe(
                        map(({ token }) => {
                            localStorage.setItem('token', token);
                            return completeLogin({ username: action.username });
                        }),
                        catchError((error: Error) => {
                            return of({ type: 'error' });
                        })
                    )
            )
        )
    )
}
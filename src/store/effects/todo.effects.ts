import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/todo.service';
import { fetchTodos, receiveTodos, createTodo, receiveCreatedTodo } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private todoService: TodoService) { }

    fetchTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchTodos),
            mergeMap(() =>
                this.todoService.getTodos()
                    .pipe(
                        map((todos) => {
                            return receiveTodos({ todos });
                        }),
                        catchError((error: Error) => {
                            return of({ type: 'error' });
                        })
                    )
            )
        )
    );

    createTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createTodo),
            mergeMap(action =>
                this.todoService.createTodo({ date: action.date, description: action.description })
                    .pipe(
                        map((todo) => {
                            return receiveCreatedTodo({ todo });
                        }),
                        catchError((error: Error) => {
                            return of({ type: 'error' });
                        })
                    )
            )
        )
    )
}
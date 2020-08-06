import { Component, OnInit } from '@angular/core';
import { IState } from '../app.module';
import { Store } from '@ngrx/store';
import { fetchTodos } from 'src/store/actions/todo.actions';
import { Observable } from 'rxjs';
import { ITodo } from 'src/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: Observable<ITodo[]>;

  constructor(private store: Store<IState>) {
    this.store.dispatch(fetchTodos());
    this.todos$ = this.store.select(state => state.todos.items);
  }

  ngOnInit(): void {
  }

}

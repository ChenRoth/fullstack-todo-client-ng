import { Component, OnInit } from '@angular/core';
import { IState } from '../app.module';
import { Store } from '@ngrx/store';
import { fetchTodos } from 'src/store/actions/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store<IState>) {
    this.store.dispatch(fetchTodos());
  }

  ngOnInit(): void {
  }

}

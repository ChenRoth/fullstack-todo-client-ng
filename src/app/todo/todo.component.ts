import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/models/todo.model';
import { IState } from '../app.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleTodo, deleteTodo } from 'src/store/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() id: string;

  item$: Observable<ITodo>;

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.item$ = this.store.select(state => state.todos.items.find(i => i._id === this.id));
  }

  toggle() {
    this.store.dispatch(toggleTodo({ todoId: this.id }));
  }

  delete() {
    this.store.dispatch(deleteTodo({ todoId: this.id }));
  }

}

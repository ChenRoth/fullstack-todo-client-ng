import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../app.module';
import { FormBuilder, Validators } from '@angular/forms';
import { createTodo } from 'src/store/actions/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<IState>) { }

  form = this.fb.group({
    description: this.fb.control('', [Validators.required]),
    date: this.fb.control('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  create() {
    const { description, date } = this.form.value;
    this.store.dispatch(createTodo({ description, date }));
    this.form.reset();
  }

}

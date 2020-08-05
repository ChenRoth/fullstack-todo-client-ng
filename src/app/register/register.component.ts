import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from '../app.module';
import { startRegister } from 'src/actions/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<IState>) {   }

  form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
  });

  ngOnInit() {

  }


  login() {
    const { username, password, email } = this.form.value;
    this.store.dispatch(startRegister({username, password, email}));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startLogin } from 'src/store/actions/user.actions';
import { IState } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<IState>) {   }

  form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required, Validators.minLength(3)]),
  });

  ngOnInit() {

  }


  login() {
    const { username, password } = this.form.value;
    this.store.dispatch(startLogin({username, password}));
  }
}

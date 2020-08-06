import { Component, OnInit } from '@angular/core';
import { IState } from '../app.module';
import { Observable } from 'rxjs';
import { IUserState } from 'src/store/reducers/user.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<IUserState>

  constructor(private store: Store<IState>) {
    this.user$ = store.select(state => state.user);
  }

  ngOnInit(): void {
  }

}

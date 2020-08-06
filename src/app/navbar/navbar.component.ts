import { Component, OnInit } from '@angular/core';
import { IState } from '../app.module';
import { Observable } from 'rxjs';
import { IUserState } from 'src/store/reducers/user.reducer';
import { Store } from '@ngrx/store';
import { logout } from 'src/store/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<IUserState>;

  constructor(private store: Store<IState>, private router: Router) {
    this.user$ = store.select(state => state.user);
  }

  ngOnInit(): void {
  }

  logout() {
    // the better solution is to create an effect for logging out, which takes care of clearing the localStorage key
    // for simplicity, i'm doing it here
    localStorage.removeItem('token');
    this.store.dispatch(logout());
    this.router.navigateByUrl('/login');
  }

}

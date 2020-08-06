import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './app.module';
import { ping } from 'src/store/actions/user.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IState>) {
        if (localStorage.getItem('token')) {
            this.store.dispatch(ping());
        }
    }
}

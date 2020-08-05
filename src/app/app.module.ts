import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { IUserState, userReducer } from 'src/store/user';
import { UserEffects } from 'src/actions/effects';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';

export interface IState {
  user: IUserState;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot<IState>({ user: userReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

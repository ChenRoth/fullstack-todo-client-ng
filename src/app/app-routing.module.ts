import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';
import { PrivateRoute } from './privateRoute';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'todos', component: TodosComponent, canActivate: [PrivateRoute]
  },
  {
    path: '**', redirectTo: 'todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

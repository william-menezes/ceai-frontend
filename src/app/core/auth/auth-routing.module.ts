import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    redirectTo: 'auth/entrar',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'criar-conta', component: RegisterComponent },
      { path: 'entrar', component: LoginComponent },
      { path: 'esqueci-minha-senha', component: ForgotPasswordComponent },
      { path: 'nova-senha', component: NewPasswordComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/entrar',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

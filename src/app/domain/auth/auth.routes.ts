import { PanelHeaderIconsTemplateContext } from './../../../../node_modules/primeng/panel/panel.d';
import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full',
  },
  {
    path: 'entrar',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    //canActivate: [isLoggedInGuard]
  },
  {
    path: 'criar-conta',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    //canActivate: [isLoggedInGuard]
  },
  {
    path: 'esqueci-minha-senha',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
    //canActivate: [isLoggedInGuard]
  },
];

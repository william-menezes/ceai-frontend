import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    //canActivate: [isLoggedInGuard]
  },
  {
    path: 'esqueci-minha-senha',
    loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
    //canActivate: [isLoggedInGuard]
  }
];

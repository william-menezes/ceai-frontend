import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  /* {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [],
  }, */
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./domain/auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
      {
        path: 'redefinir-senha',
        loadComponent: () =>
          import('./core/pages/new-password/new-password.component').then(
            (m) => m.NewPasswordComponent
          ),
      },
    ],
  },
];

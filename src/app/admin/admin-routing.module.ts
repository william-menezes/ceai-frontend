import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      //{ path: 'alunos', component: StudentsComponent },
      {path: 'alunos', loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule)},
      { path: 'funcionarios', component: EmployeesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}


  //path: '', loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),

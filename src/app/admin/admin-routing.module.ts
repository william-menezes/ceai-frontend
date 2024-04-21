import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  /* { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }, */
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'alunos', component: StudentsComponent },
      { path: 'funcionarios', component: EmployeesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

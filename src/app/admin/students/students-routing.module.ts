import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { studentsResolver } from './guards/students.resolver';

const routes: Routes = [
  { path: '', component: StudentsListComponent },
  {
    path: 'novo',
    component: StudentsFormComponent,
    resolve: { student: studentsResolver },
  },
  {
    path: 'editar/:id',
    component: StudentsFormComponent,
    resolve: { student: studentsResolver },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}

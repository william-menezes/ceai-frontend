import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'listar-alunos', pathMatch: 'full' },
  { path: '', component: StudentsListComponent },
  { path: 'novo-aluno', component: StudentsFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  /* {
    path: 'listar-alunos',
    component: StudentsListComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}

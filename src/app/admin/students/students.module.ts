import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../../primeng/primeng.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsFormComponent } from './students-form/students-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentsListComponent, StudentsFormComponent],
  imports: [CommonModule, StudentsRoutingModule, PrimengModule, ReactiveFormsModule],
})
export class StudentsModule {}

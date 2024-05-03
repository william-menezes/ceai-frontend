import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../../primeng/primeng.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [CommonModule, StudentsRoutingModule, PrimengModule],
})
export class StudentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    CoreModule
  ]
})
export class AdminModule { }

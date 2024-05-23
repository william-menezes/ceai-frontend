import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, PhonePipe, CpfPipe],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent, SidebarComponent, CpfPipe, PhonePipe],
})
export class CoreModule {}

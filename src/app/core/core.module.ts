import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}

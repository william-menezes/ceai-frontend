import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  sidebarVisible: boolean = true;

  toggleSidebar(sidebarStatus: boolean) {
    this.sidebarVisible = sidebarStatus;
  }

  public get width() {
    return window.innerWidth;
  }

}

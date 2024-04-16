import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
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

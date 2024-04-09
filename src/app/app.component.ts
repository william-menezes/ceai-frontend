import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  sidebarVisible: boolean = true;

  toggleSidebar(sidebarStatus: boolean) {
    this.sidebarVisible = sidebarStatus;
  }

  public get width() {
    return window.innerWidth;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible1: boolean = false;
  @Input() sidebarVisible: boolean = false;

  @Output() sidebarEmitter: EventEmitter<boolean> = new EventEmitter();

  onHide($event: any) {
    this.sidebarEmitter.emit(false);
  }
}

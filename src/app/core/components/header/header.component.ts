import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../../primeng/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  theme: boolean = true;
  items: MenuItem[] | undefined;
  @Input() sidebarStatus: boolean = false;
  @Output() toggleSidebarEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.items = [
      { label: 'Configurações', icon: 'pi pi-cog' },
      { label: 'Sair', icon: 'pi pi-sign-out' },
    ];
  }

  toggleTheme(theme: boolean) {
    this.theme = !theme;

    if (this.theme) {
      this.themeService.switchTheme('lara-light-blue');
    } else {
      this.themeService.switchTheme('lara-dark-blue');
    }
  }

  toggleSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
    this.toggleSidebarEmitter.emit(this.sidebarStatus);
  }
}

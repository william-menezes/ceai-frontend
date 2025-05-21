import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, ButtonModule, TieredMenuModule, ToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  theme: boolean = true;
  items: MenuItem[] | undefined;
  @Input() sidebarStatus: boolean = false;
  @Output() toggleSidebarEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private themeService: ThemeService, private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Configurações', icon: 'pi pi-cog' },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  toggleTheme(theme: boolean) {
    this.theme = !theme;

    if (this.theme) {
      this.themeService.switchTheme('aura-light-blue');
    } else {
      this.themeService.switchTheme('aura-dark-blue');
    }
    /* if (this.theme) {
      this.themeService.switchTheme('lara-light-blue');
    } else {
      this.themeService.switchTheme('lara-dark-blue');
    } */
  }

  toggleSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
    this.toggleSidebarEmitter.emit(this.sidebarStatus);
  }

  logout() {
    this.router.navigate(['auth/entrar']);
  }
}

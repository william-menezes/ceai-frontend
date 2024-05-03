import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  theme: boolean = true;
  items: MenuItem[] | undefined;
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private themeService: ThemeService, private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: './dashboard' },
      { label: 'Alunos', icon: 'pi pi-users', routerLink: './alunos'},
      { label: 'Funcionários', icon: 'pi pi-user', routerLink: './funcionarios' },
      { label: 'Atestados', icon: 'pi pi-file', routerLink: '#' },
      { label: 'Requisições', icon: 'pi pi-file', routerLink: '#' },
      { label: 'Horários', icon: 'pi pi-clock', routerLink: '#' },
      { label: 'Atividades', icon: 'pi pi-th-large', routerLink: '#' },
      { label: 'Turmas', icon: 'pi pi-calendar', routerLink: '#' },
      { label: 'Salas', icon: 'pi pi-building', routerLink: '#' },
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

  logout() {
    this.router.navigate(['auth/entrar']);
  }

  onHide($event: any) {
    this.sidebarEmitter.emit(false);
  }

  public get width() {
    return window.innerWidth;
  }
}

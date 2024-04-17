import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  enrollmentData: any;
  genderData: any;
  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.genderData = {
      labels: ['Mulheres', 'Homens'],
      datasets: [
        {
          data: [790, 201],
          backgroundColor: [
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--blue-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--pink-400'),
            documentStyle.getPropertyValue('--blue-400'),
          ],
        },
      ],
    };

    this.enrollmentData = {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      datasets: [
        {
          label: 'Usuários ativos',
          data: [1059, 824, 907, 958, 1010, 1045, 1065, 1110, 1140, 1159, 1171, 1171],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: 0.4
        }
      ]
    };
  }
}

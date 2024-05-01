import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userBySexData: any;
  studentsData: any;
  data: any;
  months: string[] = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.userBySexData = {
      labels: ['Masculino', 'Feminino'],
      datasets: [
        {
          data: [207, 804],
          backgroundColor: [
            /* 'rgba(59, 130, 246, 0.5)',
            'rgba(236, 72, 153, 0.5)', */
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--blue-700'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--blue-600'),
          ],
          borderWidth: 2,
          hoverBorderJoinStyle: 'bevel', //'round'|'bevel'|'miter'
        },
      ],
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
            align: 'center',
            position: 'right',
          },
        },
      },
    };

    this.data = {
      labels: this.months,
      datasets: [
        {
          type: 'bar',
          label: 'Feminino',
          backgroundColor: documentStyle.getPropertyValue('--blue-700'),
          data: [, /* 674 */ 58, 34, 38],
          borderRadius: 16,
          barThickness: 12,
        },
        {
          type: 'bar',
          label: 'Masculino',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: [, /* 170 */ 15, 9, 13],
          borderRadius: 16,
          barThickness: 12,
        },
      ],
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: true,
          },
          legend: {
            labels: {
              color: textColor,
              usePointStyle: true,
            },
            align: 'center',
            position: 'bottom',
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              display: false,
              //color: surfaceBorder,
              //drawBorder: false,
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      },
    };

    this.studentsData = {
      labels: this.months,
      datasets: [
        {
          label: 'Total de usuários masculinos',
          data: [170, 185, 194, 207],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.5,
        },
        {
          label: 'Total de usuários femininos',
          data: [674, 732, 766, 804],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--blue-700'),
          borderColor: documentStyle.getPropertyValue('--blue-700'),
          tension: 0.4,
        },
        {
          label: 'Total de usuários',
          data: [844, 917, 960, 1011],
          fill: false,
          //backgroundColor: 'rgba(7, 75, 185, 0.2)',
          backgroundColor: documentStyle.getPropertyValue('--primary-900'),
          borderColor: documentStyle.getPropertyValue('--primary-900'),
          tension: 0.4,
        },
      ],
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: true,
          },
          legend: {
            labels: {
              color: textColor,
              usePointStyle: true,
            },
            align: 'center',
            position: 'bottom',
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              display: false,
              //color: surfaceBorder,
              //drawBorder: false,
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      },
    };
  }
}

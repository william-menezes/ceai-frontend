import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userBySexData: any;
  userBySexOptions: any;

  data: any;
  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.userBySexData = {
      labels: ['Masculino', 'Feminino'],
      datasets: [
        {
          data: [207, 804],
          backgroundColor: ['rgba(59, 130, 246, 0.5)', 'rgba(236, 72, 153, 0.5)'],
          borderColor: ['rgba(59, 130, 246)', 'rgba(236, 72, 153)'],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--pink-400')],
          borderWidth: 1,
          hoverBorderJoinStyle: 'miter' //'round'|'bevel'|'miter'
        },
      ],
    };

    this.userBySexOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
          align: 'center',
          position: 'right'
        }
      }
    };

    this.data = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
          {
              type: 'bar',
              label: 'Masculino',
              backgroundColor: documentStyle.getPropertyValue('--blue-500'),
              data: [170, 15, 9, 13]
          },
          {
              type: 'bar',
              label: 'Feminino',
              backgroundColor: documentStyle.getPropertyValue('--pink-500'),
              data: [674, 58, 34, 38]
          }
      ]
  };

  this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          tooltip: {
              mode: 'index',
              intersect: false
          },
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              stacked: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              stacked: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
  }
}

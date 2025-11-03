import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  standalone: true,
  selector: 'app-reportes',
  imports: [IonicModule, CommonModule],
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas!: ElementRef;
  @ViewChild('barCanvas') barCanvas!: ElementRef;

  pieChart: any;
  barChart: any;

  categorias = ['Comida', 'Transporte', 'Compras', 'Otros'];
  montos = [900000, 400000, 700000, 300000];

  ngAfterViewInit() {
    setTimeout(() => {
      this.crearGraficoCircular();
      this.crearGraficoBarras();
    }, 400);
  }

  crearGraficoCircular() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.categorias,
        datasets: [
          {
            data: this.montos,
            backgroundColor: ['#74d680', '#58a6ff', '#f4d35e', '#ee964b'],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,
          },
          legend: {
            position: 'bottom',
            labels: { color: '#fff' },
          },
        },
      },
    });
  }

  crearGraficoBarras() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
          {
            label: 'Gastos Semanales (Gs)',
            data: [500000, 600000, 400000, 800000],
            backgroundColor: '#58a6ff',
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: { color: '#b2f2bb' },
          },
          y: {
            beginAtZero: true,
            ticks: { color: '#b2f2bb' },
            grid: { color: '#3a3a3a' },
          },
        },
        plugins: {
          legend: { labels: { color: '#fff' } },
        },
      },
    });
  }
}

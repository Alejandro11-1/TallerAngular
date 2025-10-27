import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
  standalone: false,
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  selected?: Serie;
  seasonsAverage = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  loadSeries(): void {
    this.seriesService.getSeries().subscribe({
      next: (series) => {
        this.series = series;
        this.selected = series[0];   //muestra la primera serie por defecto
        this.calcAverage();
      },
      error: (err) => console.error('Error cargando series', err),
    });
  }

  select(serie: Serie) {
    this.selected = serie;
  }

  private calcAverage(): void {
    if (!this.series.length) {
      this.seasonsAverage = 0;
      return;
    }
    const total = this.series.reduce((acc, s) => acc + s.seasons, 0);
    this.seasonsAverage = Math.round((total / this.series.length) * 100) / 100;
  }
}

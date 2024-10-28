import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  promedioTemporadas: string = '';
  

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calcularPromedioTemporadas();
    });
  }

  calcularPromedioTemporadas(): void {
    let totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    let promedio = totalSeasons / this.series.length;
    this.promedioTemporadas = `Seasons average: ${promedio.toFixed(1)}`;
  }


  ngOnInit() {
    this.getSeries(); 
  }
}
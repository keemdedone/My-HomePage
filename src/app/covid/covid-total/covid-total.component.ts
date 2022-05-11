import { Component, Input, OnInit } from '@angular/core';
import { Articles, CovidDay, List } from 'src/app/model/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-total',
  templateUrl: './covid-total.component.html',
  styleUrls: ['./covid-total.component.scss']
})
export class CovidTotalComponent implements OnInit {
  @Input() data: List<CovidDay> | null = null;
  @Input() news: Array<Articles> | null = null;

  constructor(
    private readonly service: CovidService
  ) {}

  ngOnInit(): void {
    return;
  }
}

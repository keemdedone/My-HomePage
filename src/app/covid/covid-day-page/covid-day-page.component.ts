import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidTimelineCasesAll } from 'src/app/model/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-day-page',
  templateUrl: './covid-day-page.component.html',
  styleUrls: ['./covid-day-page.component.scss']
})
export class CovidDayPageComponent implements OnInit {
  timelineCasesAll$!: Observable<CovidTimelineCasesAll>;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {
    this.timelineCasesAll$ = this.service.timelineCasesAll();
  }

}

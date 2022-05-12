import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CovidAll, CovidTimelineCasesAll } from 'src/app/model/covid';
import { LineChartOptions } from '../covid-line-chart/covid-line-chart.component';
import { CovidService } from '../covid.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-covid-day',
  templateUrl: './covid-day.component.html',
  styleUrls: ['./covid-day.component.scss']
})
export class CovidDayComponent implements OnInit, OnChanges {
  @Input() timelineCasesAll: CovidTimelineCasesAll | null = null;

  public chartNewCasesCovidOptions!: LineChartOptions;
  public chartNewDeathCovidOptions!: LineChartOptions;
  public chartRecoverdCovidOptions!: LineChartOptions;
  public selectedDateCovidCases: CovidAll | null = null;
  public now: Date = new Date();

  constructor(
    private readonly service: CovidService,
    ) {}

  ngOnInit(): void {
    console.log(this.selectedDateCovidCases?.new_case)
  }

  ngOnChanges(): void {
    if (this.timelineCasesAll) {
      this.chartNewCasesCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้ป่วย',
            data: this.timelineCasesAll!.chartNewCases.data,
          },
        ],
        titleText: 'จำนวนผู้ติดเชื้อสะสม',
        categories: this.timelineCasesAll!.chartNewCases.categories,
        colors: ['#f54d4d'],
      };

      this.chartNewDeathCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้เสียชีวิต',
            data: this.timelineCasesAll!.chartNewDeath.data,
          },
        ],
        titleText: 'จำนวนผู้เสียชีวิตสะสม',
        categories: this.timelineCasesAll!.chartNewDeath.categories,
        colors: ['#808080'],
      };

      this.chartRecoverdCovidOptions = {
        series: [
          {
            name: 'จำนวนผู้รักษาหาย',
            data: this.timelineCasesAll!.chartRecovered.data,
          },
        ],
        titleText: 'จำนวนผู้รักษาหายสะสม',
        categories: this.timelineCasesAll!.chartRecovered.categories,
        colors: ['#22b145'],
      };
    }
  }

  onDateChange($event: any) {
    this.selectedDateCovidCases = this.timelineCasesAll!.results.find(
      (data: CovidAll) => data.txn_date == $event.target.value
    )!;
  }

}

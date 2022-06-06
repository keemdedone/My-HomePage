import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CITYSELECT, WEATHER } from 'src/app/model/weather';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  @Input() data: WEATHER | null = null ;
  @Input() search: CITYSELECT = {};
  @Output() searchChange = new EventEmitter<CITYSELECT>();

  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      city: 'chiang mai',
      });
    this.emit();
  }

  onSearch(): void{
    this.formGroup.get('page')?.setValue(null);
    this.emit();
  }

  emit(): void{
    const searchData: CITYSELECT = {};
    const formValue = this.formGroup.value;
    if(formValue.city) searchData.city = formValue.city;
    this.searchChange.emit(this.formGroup.value);
  }

}

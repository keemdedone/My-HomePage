import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List, person, SearchData } from '../../models/models';

@Component({
  selector: 'app-star-war-people',
  templateUrl: './star-war-people.component.html',
  styleUrls: ['./star-war-people.component.scss']
})
export class StarWarPeopleComponent implements OnInit {
  @Input() data : List<person> | null = null;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelect = new EventEmitter<string>();

  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
        search: [this.search.search || null],
        page: [this.search.page || null],
      });
    this.emit();
  }

  changePage(pageUrl: string): void{
    const url = new URL(pageUrl);
    this.formGroup.setValue({
      search: url.searchParams.get('search'),
      page: url.searchParams.get('page'),
    });
    this.emit();
  }

  onSearch(): void{
    this.formGroup.get('page')?.setValue(null);
    this.emit();
  }

  onItemClick(itemUrl:string): void {
    const url = new URL(itemUrl);
    const id = url.pathname.split('/').filter((value) => value).pop();
    this.itemSelect.emit(id);
  }

  emit(): void{
    const searchData: SearchData = {};
    const formValue = this.formGroup.value;
    if(formValue.search) searchData.search = formValue.search;
    if(formValue.page) searchData.page = formValue.page;
    this.searchChange.emit(this.formGroup.value);
  }

}

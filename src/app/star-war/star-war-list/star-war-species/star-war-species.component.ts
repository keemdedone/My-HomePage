import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { List, SearchData, species } from '../../models/models';

@Component({
  selector: 'app-star-war-species',
  templateUrl: './star-war-species.component.html',
  styleUrls: ['./star-war-species.component.scss']
})
export class StarWarSpeciesComponent implements OnInit {
  @Input() data : List<species> | null = null;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelect = new EventEmitter<string>();

  formGroup!: FormGroup;
  pageEvent: PageEvent | null = null;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  //by defaults can use manual button but i need to use mat-pagination that why i write new function for page change
  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
        search: [this.search.search || null],
      });
    this.emit();
  }

  //chage page by mat-pagination
  pageIndex(i:any): void{
    this.formGroup = this.fb.group(
      {
        page: [i.pageIndex + 1 || null],
      });
    this.emit();
  }

  // *manual function*
  // changePage(pageUrl: string): void{
  //   const url = new URL(pageUrl);
  //   this.formGroup.setValue({
  //     search: url.searchParams.get('search'),
  //     page: url.searchParams.get('page'),
  //   });
  //   this.emit();
  // }

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

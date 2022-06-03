import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game, List, SearchData } from 'src/app/model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input() data: List<Game> | null = null ;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();

  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      search: [this.search.search || null],
      page: [1],
    });
    this.emit();
  }
  
  pageIndex(i:any): void{
    this.formGroup = this.fb.group({
      search: [this.search.search || null],
      page: [i.pageIndex + 1|| 1],
    });
    this.emit();
  }

  onSearch(): void{
    localStorage.setItem('loadSet','start')
    this.formGroup.get('page')?.setValue(null);
    this.emit();
  }

  emit(): void{
    const searchData: SearchData = {};
    const formValue = this.formGroup.value;
    if(formValue.search) searchData.search = formValue.search;
    if(formValue.page) searchData.page = formValue.page;
    this.searchChange.emit(this.formGroup.value);
  }

}

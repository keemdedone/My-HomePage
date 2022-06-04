import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Game, List, SearchData } from 'src/app/model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @ViewChild('paginator', { static : false} ) paginator!: MatPaginator;
  @Input() data: List<Game> | null = null ;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();

  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    //defualt search form value
    this.formGroup = this.fb.group({
      search: [this.search.search || null],
      page: [1],
    });
    this.emit();
  }
  
  pageIndex(i:any): void{
    this.formGroup = this.fb.group({
      search: [this.search.search || null],
      page: [i.pageIndex + 1|| null],
    });
    this.emit();
  }

  onSearch(): void{
    localStorage.setItem('loadSet','start') //search load check
    this.formGroup.get('page')?.setValue(1); //first page every time when search result
    this.paginator.pageIndex = 0; //change paginator tag select first page every time when search
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

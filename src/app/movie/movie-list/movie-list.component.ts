import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Popular, SearchData } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() data: Popular | null = null ;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();

  IMG_BASE_PATH = 'https://image.tmdb.org/t/p/original/';
  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //defult value
    this.formGroup = this.fb.group({
      search: 'A',
      page: 1,
      });
    this.emit();
  }

  pageIndex(i:any): void{
    let defualtSearch = this.formGroup.value.search;
    let defualtPage = this.formGroup.value.page;
    this.formGroup = this.fb.group({
        search: [this.search.search || defualtSearch],
        page: [i.pageIndex + 1 || defualtPage],
      });
    this.emit();
  }

  onSearch(): void{
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

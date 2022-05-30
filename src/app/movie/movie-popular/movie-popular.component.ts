import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Popular, SearchData } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {
  @Input() data: Popular | null = null ;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();

  IMG_BASE_PATH = 'https://image.tmdb.org/t/p/original/';
  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    return
  }

  pageIndex(i:any): void{
    this.formGroup = this.fb.group(
      {
        page: [i.pageIndex + 1 || null],
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
    if(formValue.page) searchData.page = formValue.page;
    this.searchChange.emit(this.formGroup.value);
  }

}

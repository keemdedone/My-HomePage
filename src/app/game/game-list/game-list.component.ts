import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List } from 'src/app/model/covid';
import { Game, SearchData } from 'src/app/model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @ViewChild('rating') rating!: TemplateRef<any>;

  @Input() data: List<Game> | null = null ;
  @Input() search: SearchData = {};
  @Output() searchChange = new EventEmitter<SearchData>();

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
        page: [i.pageIndex|| null],
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

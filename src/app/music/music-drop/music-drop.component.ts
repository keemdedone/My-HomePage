import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-music-drop',
  templateUrl: './music-drop.component.html',
  styleUrls: ['./music-drop.component.scss']
})
export class MusicDropComponent implements OnInit {

  music_list: any[] | null = null;
  music_name_list!: FormGroup;

  constructor(
    private dataService: ApiService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.dataService.getMusic().subscribe((res:any) => {
      this.music_list = res ;
    })
  }

}

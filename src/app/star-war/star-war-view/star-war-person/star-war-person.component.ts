import { Component, Input, OnInit } from '@angular/core';
import { person } from '../../models/models';

@Component({
  selector: 'app-star-war-person',
  templateUrl: './star-war-person.component.html',
  styleUrls: ['./star-war-person.component.scss']
})
export class StarWarPersonComponent implements OnInit {
  @Input() data: person | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}

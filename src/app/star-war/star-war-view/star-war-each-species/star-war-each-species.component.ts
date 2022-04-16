import { Component, Input, OnInit } from '@angular/core';
import { species } from '../../models/models';

@Component({
  selector: 'app-star-war-each-species',
  templateUrl: './star-war-each-species.component.html',
  styleUrls: ['./star-war-each-species.component.scss']
})
export class StarWarEachSpeciesComponent implements OnInit {
  @Input() data: species | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}

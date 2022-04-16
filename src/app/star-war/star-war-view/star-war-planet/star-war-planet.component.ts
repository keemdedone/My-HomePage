import { Component, Input, OnInit } from '@angular/core';
import { planet } from '../../models/models';

@Component({
  selector: 'app-star-war-planet',
  templateUrl: './star-war-planet.component.html',
  styleUrls: ['./star-war-planet.component.scss']
})
export class StarWarPlanetComponent implements OnInit {
  @Input() data: planet | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}

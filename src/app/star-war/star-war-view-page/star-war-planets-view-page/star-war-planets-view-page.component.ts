import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { planet } from '../../models/models';
import { StarWarService } from '../../star-war.service';

@Component({
  selector: 'app-star-war-planets-view-page',
  templateUrl: './star-war-planets-view-page.component.html',
  styleUrls: ['./star-war-planets-view-page.component.scss']
})
export class StarWarPlanetsViewPageComponent implements OnInit {
  data$!: Observable<planet>;

  constructor(
    private readonly service: StarWarService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.service.getPlanet(params['id'])),
    );
  }

  goBack(): void{
    history.back();
  }

}

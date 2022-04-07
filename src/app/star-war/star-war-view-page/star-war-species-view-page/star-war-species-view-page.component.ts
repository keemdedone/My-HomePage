import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { species } from '../../models/models';
import { StarWarService } from '../../star-war.service';

@Component({
  selector: 'app-star-war-species-view-page',
  templateUrl: './star-war-species-view-page.component.html',
  styleUrls: ['./star-war-species-view-page.component.scss']
})
export class StarWarSpeciesViewPageComponent implements OnInit {
  data$!: Observable<species>;

  constructor(
    private readonly service: StarWarService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.service.getSpecies(params['id'])),
    );
  }

  goBack(): void{
    history.back();
  }

}

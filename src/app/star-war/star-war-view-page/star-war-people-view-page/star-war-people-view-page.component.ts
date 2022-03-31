import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { person } from '../../models/models';
import { StarWarService } from '../../star-war.service';

@Component({
  selector: 'app-star-war-people-view-page',
  templateUrl: './star-war-people-view-page.component.html',
  styleUrls: ['./star-war-people-view-page.component.scss']
})
export class StarWarPeopleViewPageComponent implements OnInit {
  data$!: Observable<person>;

  constructor(
    private readonly service: StarWarService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.service.get(params['id'])),
    );
  }

  goBack(): void{
    history.back();
  }

}

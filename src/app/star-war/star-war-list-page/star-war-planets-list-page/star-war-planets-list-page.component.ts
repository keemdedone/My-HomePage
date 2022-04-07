import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { List, planet, SearchData } from '../../models/models';
import { StarWarService } from '../../star-war.service';

@Component({
  selector: 'app-star-war-planets-list-page',
  templateUrl: './star-war-planets-list-page.component.html',
  styleUrls: ['./star-war-planets-list-page.component.scss']
})
export class StarWarPlanetsListPageComponent implements OnInit {
  data$!: Observable<List<planet>>; // $ can type or not type, that unnecessary.
  search!: SearchData;

  constructor(
    private readonly service: StarWarService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.search = this.route.snapshot.queryParams
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.search = params;
        return this.service.getAllPlanets(params);
      })
    )
  }

  onSearch(search:SearchData): void{
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: search,
      replaceUrl: true,
    })
  }

  onItemSelect(id: string):void{
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }

}

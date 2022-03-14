import { Portal } from '@angular/cdk/portal';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, Observable } from 'rxjs';
import { SidenavService } from './service/sidenav.service';

const limitWidth = 800 ;
const sizeLimitWidth = `(max-width:${limitWidth}px)`; // how to write CSS on component.ts for use to limit Sidenav

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  //for $ my teacher say "it's tradition"
  isSmallScreen$!: Observable<boolean>;
  portal$!: Observable<Portal<unknown> | null>

  constructor(
    private readonly breakpointObservable: BreakpointObserver,
    private readonly sidenavPortalService: SidenavService,
  ){}

  ngOnInit(): void {
    this.isSmallScreen$ = this.breakpointObservable
      .observe(sizeLimitWidth)
      .pipe(map((result) => result.matches) /* for return boolean */
      );

      this.portal$ = this.sidenavPortalService.portal$;
  }

  play():void{
    let audio = new Audio();
    audio.src = '../assets/music/15-OnOurway.m4a'
    audio.load();
    audio.play();
  }
  
}

import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal! : Portal<unknown>;

  constructor(
    private readonly sidenavPortalService: SidenavService,
  ) { }

  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }

  ngOnInit(): void {
    return
  }

}

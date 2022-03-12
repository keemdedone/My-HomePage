import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

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

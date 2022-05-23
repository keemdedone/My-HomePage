import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/auth/api.service';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-star-war',
  templateUrl: './star-war.component.html',
  styleUrls: ['./star-war.component.scss']
})
export class StarWarComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortal) portal! : Portal<unknown>;

  constructor(
    private readonly sidenavPortalService: SidenavService,
    private dataService: ApiService,
  ) { }

  ngAfterViewInit(): void {
    this.sidenavPortalService.setPortal(this.portal);
  }

  ngOnInit(): void {
    return
  }

  onLog(action:string){
    this.dataService.userLog(localStorage.getItem('token'),'click: '+action)
  }

}

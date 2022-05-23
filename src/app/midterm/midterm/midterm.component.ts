import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/auth/api.service';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-midterm',
  templateUrl: './midterm.component.html',
  styleUrls: ['./midterm.component.scss']
})
export class MidtermComponent implements OnInit, AfterViewInit {
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

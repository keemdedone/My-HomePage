import { CdkPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/auth/api.service';
import { SidenavService } from 'src/app/service/sidenav.service';
import { myFormData } from '../my-form.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit, AfterViewInit {

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

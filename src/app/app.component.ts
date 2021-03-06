import { Portal } from '@angular/cdk/portal';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, Observable } from 'rxjs';
import { SidenavService } from './service/sidenav.service';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ApiService } from './auth/api.service';

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
  count: number = 0
  audioShow: boolean = false;
  darkActive: boolean = true;
  login: boolean = false;
  loginBtn:boolean;
  logoutBtn:boolean;
  listShow: boolean = false;

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  title: any;

  constructor(
    private readonly breakpointObservable: BreakpointObserver,
    private readonly sidenavPortalService: SidenavService,
    private overlay: OverlayContainer,
    private dataService: ApiService,
  ){
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn()){
      console.log("user already login");
      this.loginBtn=false;
      this.logoutBtn=true;
    } else {
      this.loginBtn=true;
      this.logoutBtn=false;
    }
  }

  ngOnInit(): void {
    this.isSmallScreen$ = this.breakpointObservable
      .observe(sizeLimitWidth)
      .pipe(map((result) => result.matches) /* for return boolean */
      );

    this.portal$ = this.sidenavPortalService.portal$;

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });

    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'darkMode' : '';
    });
  }

  showAudioControl(): void{
    this.audioShow = !this.audioShow;
  }

  onActive(): void{
    this.darkActive = !this.darkActive;
  }

  onShowList(){
    this.listShow = !this.listShow;
  }

  onLog(action:string): void{
    if (!(localStorage.getItem('token'))){
      const token = "0"
      this.dataService.userLog(token,'click: ' + action);
      return
    } else {
      const token = localStorage.getItem('token')
      this.dataService.userLog(token,'click: ' + action);
      return
    }
  }

  private changeName(name: boolean): void {
    this.logoutBtn = name;
    this.loginBtn = !name;
  }

  logout(action:string){
    this.dataService.userLog(localStorage.getItem('token'), action);
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

}

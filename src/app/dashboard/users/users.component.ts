import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  tokenName = localStorage.getItem("token");
  idCheck: any;

  constructor(
    private dataService: ApiService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((result:any) => {
        this.users = result;
      }, (err) => {
        console.log(err);
      }
    );
    console.log(this.tokenName)
  }

  delUserInfo(id:number) {
    this.dataService.delUser(id).subscribe(() => {
      console.log("user deleted");
      //after delete must call getUsers function again for refresh result.
      this.dataService.getUsers().subscribe((result:any) => {
        this.users = result;
      }, (err) => {
        console.log(err);
      })
    });
  }

  switchUserAccount(id:any) {
    localStorage.setItem('token', id);
    this.tokenName = localStorage.getItem("token");
  }

  switchAdminAccount(id:any): void{
    if(id = '1'){
      let password = prompt("password");
      if(password == '1234'){
        localStorage.setItem('token', 'admin');
        this.tokenName = localStorage.getItem("token");
      } else {
        alert('password incoorect try again');
        return
      }
    }
  }

}

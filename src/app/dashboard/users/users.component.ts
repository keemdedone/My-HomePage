import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(
    private dataService: ApiService,
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((result:any) => {
        this.users = result;
      }, (err) => {
        console.log(err);
      }
    );
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

}

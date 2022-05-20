import { Pipe,Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/api.service';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tokenName = localStorage.getItem("token");
  users: any;
  idCheck: any;
  name: any;

  formGroup!: FormGroup;

  constructor(
    private dataService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((result:any) => {
        this.users = result;
      }, (err) => {
        console.log(err);
      }
    );
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {});
    dialogRef.afterClosed().subscribe(()=> {
      this.dataService.getUsers().subscribe((res:any) => {
        this.users = res;
      }, (err) => {
        console.log(err);
      })
    })
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

  switchAdminAccount(lv:any): void{
    if(lv == '0'){
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

  onSearch(): void{
    if(this.name == ""){
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res:any) => {
        let result = res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        return result
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;

  sort(key:any): void{
    this.key = key;
    this.reverse = !this.reverse;
  }

}

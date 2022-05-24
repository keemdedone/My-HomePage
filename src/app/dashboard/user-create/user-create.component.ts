import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @ViewChild('CompleteDialog') CompleteDialog!: TemplateRef<any>;
  @ViewChild('IncompleteDialog') IncompleteDialog!: TemplateRef<any>;
  @ViewChild('ServerDown') ServerDown!: TemplateRef<any>;
  @ViewChild('SameName') SameName!: TemplateRef<any>;

  createForm: FormGroup;
  authLevel = localStorage.getItem("token");

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    public dialog: MatDialog,
  ) {
    this.createForm = this.fb.group({
      email: [null, [Validators.required,Validators.minLength(1), Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required],
    });
   }

  ngOnInit(): void {
    if(this.authLevel !== "admin"){
      alert("you don't have permission to use this function!!!");
      history.back();
    }
  }

  postdata(createForm1:
    { value:
      {
        name: string,
        email: string,
        password: number,
      };
    }): void{
      if (!this.createForm.invalid) {
        this.dataService.getUsers().subscribe((res:any) =>{
          for (let i = 0 ; i < res.length ; i++){
            if(createForm1.value.name == res[i].name && createForm1.value.email == res[i].email){
              this.dialog.open(this.SameName);
              return
            }
          }
          this.dataService.userRegistration(createForm1.value.name,createForm1.value.email,createForm1.value.password).subscribe(
            data => {
              this.dialog.open(this.CompleteDialog);
              this.dataService.userLog(this.authLevel,'create user complete');
              return
            },
            error => {
              this.dialog.open(this.ServerDown);
              this.dataService.userLog(0,'serverdown, register unsuccessful')
              return;
            }
          )
        })
      } else {
        this.createForm.markAllAsTouched();
        this.dialog.open(this.IncompleteDialog);
        this.dataService.userLog(0,'register unsuccessful');
        return
      }
    }

    get createEmail() {
      return this.createForm.get('email');
    }

    get createPassword() {
      return this.createForm.get('password');
    }

    get createName() {
      return this.createForm.get('name');
    }

    onDialogClose(): void{
      this.dialog.closeAll();
    }

}

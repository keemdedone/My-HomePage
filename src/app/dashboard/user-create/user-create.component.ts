import { Component, OnInit } from '@angular/core';
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
  createForm: FormGroup;
  authLevel = localStorage.getItem("token");

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
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
        const dialogRef = this.dialog.open(UserCreateComponent,{});
        this.dataService.userRegistration(createForm1.value.name,createForm1.value.email,createForm1.value.password).subscribe(
          data => {
            // this.dialog.open(this.CompleteDialog);
            console.log('complete!!')
            dialogRef.close();
            this.router.navigate(['dashboard']);
          },
          error => {
            // this.dialog.open(this.ServerDown);
            return;
          }
        );
      } else {
        this.createForm.markAllAsTouched();
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

}

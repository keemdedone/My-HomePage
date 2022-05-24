import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild('CompleteDialog') CompleteDialog!: TemplateRef<any>;
  @ViewChild('IncompleteDialog') IncompleteDialog!: TemplateRef<any>;
  @ViewChild('ServerDown') ServerDown!: TemplateRef<any>;
  @ViewChild('SameName') SameName!: TemplateRef<any>;

  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router:Router,
    private dialog: MatDialog,
  ) {
    this.angForm = this.fb.group({
      email: [null, [Validators.required,Validators.minLength(1), Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required],
    });
  }

  ngOnInit() {
    return;
  }

  postdata(angForm1:
    { value:
      {
        name: string,
        email: string,
        password: number,
      };
    }): void{
      if (!this.angForm.invalid) {
        this.dataService.getUsers().subscribe((res:any) => {
          for (let i = 0 ; i < res.length ; i++){
            if(angForm1.value.name == res[i].name && angForm1.value.email == res[i].email){
              this.dialog.open(this.SameName);
              return
            }
          }
          this.dataService.userRegistration(angForm1.value.name,angForm1.value.email,angForm1.value.password).pipe(first()).subscribe(
            data => {
              this.dialog.open(this.CompleteDialog);
              this.router.navigate(['login']);
            },
            error => {
              this.dialog.open(this.ServerDown);
              this.dataService.userLog(0,'serverdown, register unsuccessful')
              return
            }
          )
        })
      } else {
        this.angForm.markAllAsTouched(); //this medtod will wacth all angForm(on the top line 20) in form where null value
        this.dialog.open(this.IncompleteDialog);
        this.dataService.userLog(0,'register unsuccessful')
        return;
      }
    }

  get email() {
    return this.angForm.get('email');
  }

  get password() {
    return this.angForm.get('password');
  }

  get name() {
    return this.angForm.get('name');
  }

}

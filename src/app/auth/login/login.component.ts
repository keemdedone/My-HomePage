import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('Dialog') Dialog!: TemplateRef<any>;
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.angForm = this.fb.group({
      email: [null, [Validators.required,Validators.minLength(1), Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    return;
  }

  postdata(angForm1: { value: { email: string; password: number; }; }) {
    this.dataService.userLogin(angForm1.value.email,angForm1.value.password)
    .pipe(first()).subscribe(
    data => {
      const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
      this.router.navigate([redirect]);
    }, error => {
      this.dialog.open(this.Dialog);
    });
  }

  get email() {
    return this.angForm.get('email');
  }

  get password() {
    return this.angForm.get('password');
  }

}

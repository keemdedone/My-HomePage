import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router:Router,
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
    }) {
      if (this.angForm.invalid) {
        this.angForm.markAllAsTouched(); //this medtod will wacth all angForm(on the top line 20) in form where null value
        alert('Plase inert all box.')
        return;
      } else {
        this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password).pipe(first()).subscribe(
          data => {
            this.router.navigate(['login']);
          }, error => {
            alert("Error server down OR forget to start XAMPP")
          });
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

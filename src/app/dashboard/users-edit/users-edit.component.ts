import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/auth/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  authLevel = localStorage.getItem('token');
  id: any;
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: ApiService,
    private activateRoute: ActivatedRoute,
  ) {
    this.updateForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required,Validators.minLength(1), Validators.email]],
      password: [null, Validators.required],
      level: [null, Validators.required],
    });

    this.id = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    return;
  }

  postdata(updateForm1:
    { value:
      {
        id: string,
        name: string,
        email: string,
        password: number,
        level: number,
      };
    }): void {
      if (!this.updateForm.invalid) {
        this.dataService.userEdit(this.id,updateForm1.value.name,updateForm1.value.email,updateForm1.value.password,updateForm1.value.level).subscribe(
          data => {
            this.dataService.userLog(localStorage.getItem('token'),'update user data')
            this.router.navigate(['dashboard']);
          },
          error => {
            return;
          }
        );
      } else {
        this.updateForm.markAllAsTouched(); //this medtod will wacth all updateForm(on the top line 20) in form where null value
        return;
      }
    }

  get updateEmail() {
    return this.updateForm.get('email');
  }

  get updatePassword() {
    return this.updateForm.get('password');
  }

  get updateName() {
    return this.updateForm.get('name');
  }

  onBack(): void{
    this.dataService.userLog(localStorage.getItem('token'),'cancel update user data')
    return history.back();
  }

}

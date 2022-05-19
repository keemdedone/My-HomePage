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

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router:Router,
    private dialog: MatDialog,
  ) {
    this.createForm = this.fb.group({
      email: [null, [Validators.required,Validators.minLength(1), Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required],
    });
   }

  ngOnInit(): void {
    return
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
        this.dataService.userRegistration(createForm1.value.name,createForm1.value.email,createForm1.value.password).subscribe(
          data => {
            // this.dialog.open(this.CompleteDialog);
            console.log('complete!!')
          },
          error => {
            // this.dialog.open(this.ServerDown);
            return;
          }
        );
      } else {
        this.createForm.markAllAsTouched(); //this medtod will wacth all createForm(on the top line 20) in form where null value
        // this.dialog.open(this.IncompleteDialog);
        return;
      }
    }

    onBack(): void{
      return history.back();
    }

}

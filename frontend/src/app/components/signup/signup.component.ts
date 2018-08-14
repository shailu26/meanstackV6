import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserDetailService } from '../../services/userDetail/user-detail.service';
export class SignUpErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(
    private userApi: UserDetailService
  ) { }

  SignUpFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  signUpData = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl( '', Validators.email),
    password: new FormControl('', Validators.required)
 });

  errorIdentifier = new SignUpErrorStateMatcher();

  createUser(userDetails) {
    console.log('userdetail', userDetails.value);
    this.userApi.createNewUser(userDetails.value).subscribe(res => {
      console.log('welcome -----> ', res);
    });
  }
}

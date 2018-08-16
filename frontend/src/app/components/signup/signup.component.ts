import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { UserDetailService } from '../../services/userDetail/user-detail.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUpValidation: FormGroup;
  isValidForm = false;
  constructor(
    private userApi: UserDetailService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpValidation = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isSignUpFormValid() {
    console.log('.////.');
  }
  createUser(userDetails) {
    console.log('userdetail', userDetails.value);
    this.userApi.createNewUser(userDetails.value).subscribe(res => {
      console.log('welcome -----> ', res);
    });
  }
}

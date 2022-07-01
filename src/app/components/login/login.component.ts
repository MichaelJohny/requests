import { authService } from './../../shared/services/authService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { loginModel } from 'src/app/shared/services/models/authModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private authService: authService
  ) {
    this.LoginForm = this.formBuilder.group(
      {
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  saveData() {
    debugger
    if (this.LoginForm.invalid) {
      return;
    }
    let loginModel = this.LoginForm.value;
    this.authService
      .login(loginModel.phoneNumber, loginModel.password)
      .subscribe(
        (result) => {
          if (result.succeeded) {
          }
        },
        (err) => {

        }
      );
  }

}

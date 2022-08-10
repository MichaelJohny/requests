import { authService } from './../../shared/services/authService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { loginModel } from 'src/app/shared/services/models/authModel';
import { AppAuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  isVaild: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private authService: AppAuthService,
    private readonly router: Router
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
    if (this.LoginForm.invalid) {
      return;
    }
    let loginModel = this.LoginForm.value;
    this.authService.auth(loginModel.phoneNumber, loginModel.password).subscribe((result: any) => {
                  if (!result.succeeded) 
                  {
                      this.isVaild= false;
                  }else
                  {
                      localStorage.setItem('token', JSON.stringify(result.data.accessToken));
                      localStorage.setItem('user-id', JSON.stringify(result.data.id));
                      this.router.navigate(["add-product"]);
                      this.isVaild= true;
                  }
              });;

  }



}

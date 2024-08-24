import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLogin, AuthResponse } from 'src/app/shared/model/auth.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'spd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm!: FormGroup;
  constructor( private readonly router: Router, private authSrv: AuthService) {}


  public ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    });
  }
  public login() {
    const request: AuthLogin =  {
      username: this.myForm.value.username,
      password: this.myForm.value.password
    }

    this.authSrv.auth(request).subscribe((resp: AuthResponse) => {
      if(resp?.enter) {
        this.router.navigateByUrl('spd/dashboard');
      } else {
         console.log(resp?.msj)
      }
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule { }

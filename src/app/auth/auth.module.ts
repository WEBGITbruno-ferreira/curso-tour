import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, AuthRoutingModule, SharedModule, MatFormFieldModule
  ]
})
export class AuthModule { }

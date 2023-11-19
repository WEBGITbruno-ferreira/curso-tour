import { AuthService } from './../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Credential } from 'src/app/auth/models/crendentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: [
      '',
      [Validators.email, Validators.required]
    ],
    password: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor( private fb: FormBuilder, private authService:AuthService){

  }

  onSubmit() : void {

   // console.log(this.form)

   console.log(this.form.valid)
      if (this.form.valid) {
       this.authService.login(this.form.value as Credential)
       console.log( 'valid')
      }
  }

}

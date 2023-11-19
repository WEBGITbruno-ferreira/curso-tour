import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/components/login/login.component';


const routes: Routes = [
    //vazio por causa do lazy
  {path: '', component: LoginComponent},

]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class AuthRoutingModule { }

import { AuthGuard } from './../auth/guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  //está vazio por causa do lazy loading, meio sem noção
  {path: '', component: DashboardComponent, canActivate : [AuthGuard]}
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class DashboardRoutingModule { }

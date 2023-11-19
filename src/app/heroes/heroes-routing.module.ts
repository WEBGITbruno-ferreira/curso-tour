import { AuthGuard } from './../auth/guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';



const routes: Routes = [

  //vazio por causa do lazy
  {path: '', component: HeroesComponent, canActivate : [AuthGuard]},
  {path: ':id', component: HeroDetailComponent, canActivate : [AuthGuard]},
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class HeroesRoutingModule { }

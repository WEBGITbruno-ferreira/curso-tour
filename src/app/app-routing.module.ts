
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo : '/dashboard', pathMatch: 'full'},
  //lazy loading example
  {path: 'dashboard',
   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: 'heroes',
  loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
 },

 {path: 'login',
 loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},

 {path: '**',
 component: PagenotfoundComponent
},
]


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

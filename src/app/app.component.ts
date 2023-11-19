import { AuthService } from './auth/services/auth.service';
import { Observable } from 'rxjs';
import { MenuItemInterface } from './core/models/menu-item.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>
  title = 'curso-tour';

  menuItems: MenuItemInterface[] = [
    { icon: 'dashboard',
     routerLink: '/dashboard',
      tollTipText: 'dashboard' },

    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      tollTipText: 'heroes',
    },
  ];


  constructor(private authService:AuthService){
    this.isLoggedIn$ = this.authService.isLoggedin$
  }

  onLogout() : void {
    this.authService.logout()
  }
}

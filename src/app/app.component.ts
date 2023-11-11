import { MenuItemInterface } from './core/models/menu-item.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}

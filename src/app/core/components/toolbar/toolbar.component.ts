import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MenuItemInterface } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  @Input() isLoggedIn : boolean | null = null

  @Input() title = ''
  @Input() menuItems : MenuItemInterface[] = []

  @Output() private logout = new EventEmitter();
  onLogout(){
    this.logout.emit()
  }
}

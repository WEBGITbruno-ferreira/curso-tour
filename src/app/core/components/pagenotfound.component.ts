import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `<mat-card>
    <mat-card-title>404: Page not fount  </mat-card-title>
    <mat-card-content> Não achamos a página, valide a URL</mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary" routerLink="/">Home</button>
    </mat-card-actions>
  </mat-card>`
  ,
  styles:[`:host{
    text-align: center;
  }`]

})
export class PagenotfoundComponent {

}

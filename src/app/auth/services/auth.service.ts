import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Credential } from '../models/crendentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedin$ = this.loggedIn.asObservable();

  constructor(
    private router : Router
  ) { }

  login(credentials : Credential) : void {
    localStorage.setItem('token', credentials.password)
    this.updateLoggedIn()
    this.router.navigate(['/dashboard'])
  }

  logout() : void {
    localStorage.clear()
    this.updateLoggedIn()
    this.router.navigate(['/login'])
  }

  updateLoggedIn() : void {
    const token = localStorage.getItem('token');
    if(token){
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

}

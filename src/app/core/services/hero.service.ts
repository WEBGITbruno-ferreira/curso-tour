import { environment } from './../../../environments/environment';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

/* eslint-disable @typescript-eslint/no-empty-function */

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private heroesurl = `${environment._apiurl}/api/heroes`;

  constructor(
    private  http: HttpClient,
    private messageService : MessageService){ }



 /* MODO MOCK getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.log('fetched heroes')
    console.log(this.messageService.getMessages())
    return heroes
  }


    getHero(id: number): Observable<Hero> {
    const hero = HEROES.find( it => it.id === id)!;
    this.log(`fetched Hero ID =${{id}}`)
    return of(hero)
   }
   */


  /*modo API */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesurl).pipe( tap((h => this.log("fetched HEROES"))))
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesurl}/${id}`).pipe( tap((h => this.log(`getHero id${id}`))))
   }

  private log(message: string) : void {
    this.messageService.add(`HeroService: ${message}`)
  }
}

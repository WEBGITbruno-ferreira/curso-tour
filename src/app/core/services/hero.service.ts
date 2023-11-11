import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

/* eslint-disable @typescript-eslint/no-empty-function */

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService){ }



  getHeroes(): Observable<Hero[]> {


    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    console.log(this.messageService.getMessages())

    return heroes
  }

  getHeroe(id: number): Observable<Hero> {
    const hero = HEROES.find( it => it.id === id)!;
    this.messageService.add(`HeroService: fetched Hero ID =${{id}}`)
    return of(hero)
   }
}

import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor (private heroService : HeroService,
    private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //subscrevendo no observable e tratando o retorno
   this.heroService.getHeroes().subscribe( varret => this.heroes = varret);

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected '+hero.name)

  }

}

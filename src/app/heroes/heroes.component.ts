
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
  displayedColumns: string[] = ['id','name']

  constructor (private heroService : HeroService,
   ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //subscrevendo no observable e tratando o retorno
   this.heroService.getHeroes().subscribe( varret => this.heroes = varret);

  }



}

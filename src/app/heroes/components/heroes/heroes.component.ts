
import { HeroService } from '../../../core/services/hero.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Hero } from '../../../core/models/hero.model';
import { Component, OnInit } from '@angular/core';

import { HEROES } from '../../../core/services/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  displayedColumns: string[] = ['id','name', 'actions']

  constructor (private heroService : HeroService,
   ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //subscrevendo no observable e tratando o retorno
   this.heroService.getAll().subscribe( varret => this.heroes = varret);

  }

  /* opção de delete
  deleteHero( hero : Hero): void {
    //subscrevendo no observable e tratando o retorno
   this.heroService.deleteHero(hero).subscribe( ()=> {
    this.heroes = this.heroes.filter(h => h !== hero)
   });

  } */

  deleteHero( hero : Hero): void {
    //subscrevendo no observable e tratando o retorno
   this.heroService.deleteHero(hero).subscribe( ()=> {
    this.getHeroes()
   });

  }



}

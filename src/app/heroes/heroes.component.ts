/* eslint-disable @typescript-eslint/no-empty-function */
import { Hero } from './../hero.model';
import { Component } from '@angular/core';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = { id: 1, name: 'superman' };


  heroes = HEROES
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

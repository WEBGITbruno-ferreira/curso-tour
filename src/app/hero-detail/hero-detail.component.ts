import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector : 'app-hero-detail',
  templateUrl : './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})

export class HeroDetailComponent implements OnInit{

  /*selectedHero : Hero | undefined*/
  selectedHero !: Hero



  constructor(private heroService : HeroService,
    private location: Location,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.getHero()
    }

    getHero() : void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHeroe(id).subscribe( hero => this.selectedHero = hero)
    }

    goBack(){
      this.location.back()
      return
    }
}

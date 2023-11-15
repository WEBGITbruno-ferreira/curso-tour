import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
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

  isEditing!: boolean


  constructor(private heroService : HeroService,
    private location: Location,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.getHero()
      this.selectedHero = { name : ''} as Hero
    }

    getHero() : void {
      const paramId = this.route.snapshot.paramMap.get('id')
      if (paramId === 'new') {
        this.isEditing = false
        this.selectedHero = { name : ''} as Hero
      }else {
        this.isEditing = true
      const id = Number(paramId)
      this.heroService.getOne(id).subscribe( hero => this.selectedHero = hero)

      }
    }

    goBack(){
      this.location.back()
      return
    }



    create(){
      this.heroService.createHero(this.selectedHero).subscribe( (hero)=> this.goBack())
      return
    }


    update(){
      this.heroService.updateHero(this.selectedHero).subscribe( (hero)=> this.goBack())
      return
    }


    isFormValid():boolean {

      return !this.selectedHero.name.trim()
    }
}

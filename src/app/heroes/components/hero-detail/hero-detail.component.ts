import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector : 'app-hero-detail',
  templateUrl : './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})

export class HeroDetailComponent implements OnInit{

  /*selectedHero : Hero | undefined*/
  selectedHero !: Hero

  isEditing = false

  form = this.fb.group({
    id: [{value: '', disabled : true}],
    name: ['',[Validators.required, Validators.minLength(3)]]
  });


  constructor(
    private fb: FormBuilder,
    private heroService : HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private _snackBar : MatSnackBar

    ){}

    ngOnInit(): void {
      this.getHero()

    }

    getHero() : void {
      const paramId = this.route.snapshot.paramMap.get('id')
      if (paramId != 'new') {
        this.isEditing = true
      const id = Number(paramId)
      this.heroService.getOne(id).subscribe( hero => {
      this.selectedHero = hero;

      this.form.controls['id'].setValue(hero.id.toString())
      this.form.controls['name'].setValue(hero.name)

      })

      }
    }

    goBack(){
      this.location.back()
      return
    }



    create(){
      const {valid, value } = this.form

      const  valname = value.name? value.name : ''

      let hero!: Hero
      if(valid) {
        hero  = {

          name: valname
        } as Hero

        this.heroService.createHero(hero).subscribe( (hero)=> this.goBack())
      } else {
        this.showErroMsg()
      }


      return
    }


    update(){
      console.log(this.form)
      const {valid, value } = this.form

      const  valname = value.name? value.name : ''

      let hero!: Hero
      if(valid) {
        hero  = {
          id : this.selectedHero.id,
          name: valname
        }
        this.heroService.updateHero(hero).subscribe( (hero)=> this.goBack())
      } else {
        this.showErroMsg()
      }

      return
    }


   private showErroMsg() : void {
    this._snackBar.open('Please check the errors found', 'Ok', {
      duration : 5000,
      verticalPosition: 'top'
    })
   }
}

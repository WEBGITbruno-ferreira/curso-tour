import { ConfimationDialogComponent } from './../../../core/components/confimation-dialog/confimation-dialog.component';
import { DialogData } from './../../../core/models/dialog-data.model';

import { HeroService } from '../../../core/services/hero.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Hero } from '../../../core/models/hero.model';
import { Component, OnInit } from '@angular/core';

import { HEROES } from '../../../core/services/mock-heroes';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  displayedColumns: string[] = ['id','name', 'actions']

  constructor (
    private heroService : HeroService,
    private dialog : MatDialog
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
    const dialog : DialogData = { cancelText : 'cancelar', confirmText :"sim",  content : `Deletar ${hero.name}`}

    const dialogRef = this.dialog.open(ConfimationDialogComponent, {data : dialog , width : '600px'})
    //subscrevendo no observable e tratando o retorno

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this.heroService.deleteHero(hero).subscribe( ()=> {
          this.getHeroes()
      })}}
    )



  }

  onSelected(hero : Hero): void {

    this.deleteHero(hero)

  }



}

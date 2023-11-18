import { HeroService } from './../../../core/services/hero.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit{
  heroes$!: Observable<Hero[]>
  @Input() label = ''

  private searchTerm = new Subject<string>()
  @Output() private  selected = new EventEmitter<Hero>()

  constructor(private heroService:HeroService){}

    ngOnInit(): void {
        this.heroes$ = this.searchTerm.pipe(
          switchMap( term => this.heroService.searchInJsonServer(term))
        )
    }


  search(term : string) : void {
    this.searchTerm.next(term)
  }

  onSelect(selectedItem : any) : void{
      //console.log(selectedItem)
      this.searchTerm.next('')
      const hero:Hero = selectedItem.option.value;

      this.selected.emit(hero)

  }
}

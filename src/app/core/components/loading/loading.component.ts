import { LoadingService } from './../../services/loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor( public loadingService: LoadingService) {


    //novo jeito de usar o subscribe, quando estamos usando o behavior, no template
    //*ngIf="this.loadingService.loading$ | async "
  }
}

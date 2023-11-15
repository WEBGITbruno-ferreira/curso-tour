import { DialogData } from './../../models/dialog-data.model';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confimation-dialog',
  templateUrl: './confimation-dialog.component.html',

})
export class ConfimationDialogComponent {

  constructor ( @Inject(MAT_DIALOG_DATA) public data : DialogData ) {

  }
}

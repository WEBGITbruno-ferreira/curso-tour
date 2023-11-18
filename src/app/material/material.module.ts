import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const MODULES = [
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatExpansionModule,
MatTooltipModule,
MatCardModule,
MatListModule,
MatInputModule,
MatTableModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatSnackBarModule,
MatDialogModule,
MatAutocompleteModule
]

@NgModule({

  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }

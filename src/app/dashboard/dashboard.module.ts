import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule, FlexLayoutModule
  ]
})
export class DashboardModule { }

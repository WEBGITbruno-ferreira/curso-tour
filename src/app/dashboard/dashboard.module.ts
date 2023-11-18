import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboarding-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MaterialModule, DashboardRoutingModule, FlexLayoutModule, SharedModule
  ]
})
export class DashboardModule { }

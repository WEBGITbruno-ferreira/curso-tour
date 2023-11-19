import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //features  //// LAZY LOADING NO APP ROUTING
    //DashboardModule,
    //HeroesModule,


    //app
    AuthModule,
    AppRoutingModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

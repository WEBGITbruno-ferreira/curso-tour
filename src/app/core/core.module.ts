import { LoadingInterceptor } from './interceptos/loading.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const COMPONENTS = [ ToolbarComponent, MessagesComponent, PagenotfoundComponent, LoadingComponent]
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule]


@NgModule({
  declarations: [COMPONENTS  ],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }]
})
export class CoreModule {
  //validação se o coremodule já foi importado novamente
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {

    if (parentModule) {
      throw new Error("CoreModule já foi importado, importe esse  module no AppModule")
    }
  }
}

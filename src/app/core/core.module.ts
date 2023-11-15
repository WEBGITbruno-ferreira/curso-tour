import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PagenotfoundComponent } from './components/pagenotfound.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ConfimationDialogComponent } from './components/confimation-dialog/confimation-dialog.component';


const COMPONENTS = [ ToolbarComponent, MessagesComponent, PagenotfoundComponent, LoadingComponent]
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule]


@NgModule({
  declarations: [COMPONENTS, ConfimationDialogComponent  ],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
]
})
export class CoreModule {
  //validação se o coremodule já foi importado novamente
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {

    if (parentModule) {
      throw new Error("CoreModule já foi importado, importe esse  module no AppModule")
    }
  }
}

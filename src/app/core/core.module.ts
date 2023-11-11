import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [ ToolbarComponent, MessagesComponent]
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule]


@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {
  //validação se o coremodule já foi importado novamente
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {

    if (parentModule) {
      throw new Error("CoreModule já foi importado, importe esse  module no AppModule")
    }
  }
}
